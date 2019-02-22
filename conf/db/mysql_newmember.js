//依赖关系
var mysql = require("mysql");
var async = require("async");

//连接池，Mysql操作类配置，创建连接池
var pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'user_name',
    password: 'pswd',
    database: 'db_name'
});


var query = function() {};



/**
 * 定义query的公共查询原型
 * @param sql sql语句
 * @param callback 返回值
 */
query.prototype.Gen = function(sql, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(err, null, null);
        } else {
            connection.query(sql, function(error, results, fields) {
                connection.release();
                if (error) {
                    callback(error, null, null);
                } else {
                    callback(error, results, fields);
                };
            });
        };
    });
};

/**
 * 定义query的事务原型
 * @param sql sql语句
 * @param callback 返回值
 */
query.prototype.doTransaction = function(sql, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(err, null, null);
        } else {
            connection.beginTransaction(function(err) {
                if (err) {
                    callback(err, null, null);
                } else {
                    connection.query(sql, function(error, results, fields) {
                        connection.release();
                        if (error) {
                            return connection.rollback(function() {
                                callback(error, null, null);
                            });
                        } else {
                            connection.commit(function(err) {
                                if (err) {
                                    return connection.rollback(function() {
                                        callback(err, null, null);
                                    });
                                } else {
                                    callback(err, results, fields);
                                }
                            });
                        };
                    });
                };
            });
        }
    });
};

/**
 * 定义执行sql队列的事务
 * @param sql sql语句队列。[sql1,sql2]
 * @param callback 返回值,如有有错误，回滚返回err。没有错误返回result集合。
 */
query.prototype.QueueTransaction = function(sqlqueue, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            return callback(err, null);
        }
        connection.beginTransaction(function (err) {
            if (err) {
                return callback(err, null);
            }
            var funcAry = [];
            sqlqueue.forEach(function (sql_param) {
                var temp = function (cb) {
                    connection.query(sql_param, function (err, rows, fields) {
                        if (err) {
                            connection.rollback(function () {
                                return cb(err,null);
                            });
                        } else {
                            return cb(null,rows,fields);
                        }
                    })
                };
                funcAry.push(temp);
            });
            async.series(funcAry, function (err_msg, result) {
                if (err_msg) {
                    connection.rollback(function (err) {
                        connection.release();
                        return callback(err_msg, null);
                    });
                } else {
                    connection.commit(function (err, info) {
                        if (err) {
                            connection.rollback(function (err) {
                                connection.release();
                                return callback(err, null);
                            });
                        } else {
                            connection.release();
                            return callback(null, result);
                        }
                    })
                }
            })
        });
    });
};




//测试连接
pool.getConnection(function(err, connection) {
    if (err) {
        logger.error(err);
        console.log('新会员会员库连接失败');
    } else {
        connection.ping(function(err) {
            if (err) {
                logger.error(err);
                console.log('新会员会员库连接失败');
            } else {
                connection.release();
                console.log('\x1B[34m%s\x1B[39m', '新会员会员库连接成功')
            };
        })
    }
})


//导出模块接口
module.exports = new query();