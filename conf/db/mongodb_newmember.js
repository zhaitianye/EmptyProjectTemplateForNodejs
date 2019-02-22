//mongooDB操作类，原生操作,基于NPM MongoDB 3.1.10
//依赖关系
var   MongoClient = require('mongodb').MongoClient;
var   logger_db = require("../Log/log.js").DB;

//建立mongodb连接，这里是连接新会员系统
var options = {
    db_user: "username",
    db_pwd: "userpwd",
    db_host: "127.0.0.1",
    db_port: 27017,
    db_name: "db_name"
};

var conf = {  
    useNewUrlParser: true
};

//连接URL
var dbURL = `mongodb://${options.db_host}:${options.db_port}`;
//数据库名称
var dbName = `${options.db_name}`;


//测试连接
MongoClient.connect(dbURL,conf,function(err,db) {
    if (err) {
        logger_db.error('Mongodb 原生连接失败，原因：' + err);
        console.log("Mongodb 原生连接失败!");
    }else{
        let dbase = db.db(dbName);
        console.log('\x1B[34m%s\x1B[39m', 'Mongodb 原生连接成功');
        db.close();
    }
});


//函数初始化,这个函数的原型的所有错误自动记录日志，后续不用再多做处理
var DB = function() {};


/**
 * 保存单条json数据
 * @param table_name 表名
 * @param fields 单条json数据
 * @param return 成功返回true,失败返回fasle
 */
DB.prototype.SaveOne = async (table_name, fields)=>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.insertOne(fields, function(err, res) {
                if (err) throw err;
                resolve(res);
                DBServer.close();
            });
        });
    }).then(result =>{
        return true;
    }).catch(e=>{
        logger_db.error('Mongodb 保存单条数据失败，原因：' + e);
        return false;
    });
};

/**
 * 更新单条数据(带操作符)
 * @param table_name 表名
 * @param conditions 查询条件 {"uid":'38C6742B-6E6D-4193-A7E9-54FC6D0C336C'}
 * @param update_fields 要更新的字段，完整的条件 {$set: { "name" : "一个伟大的人" }}
 * @param return 成功返回true,失败返回fasle
 */
DB.prototype.UpdateOne = async (table_name, conditions,update_fields)=>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.updateOne(conditions,update_fields, function(err, res) {
                if (err) throw err;
                resolve(res);
                DBServer.close();
            });
        });
    }).then(result =>{
        return true;
    }).catch(e=>{
        logger_db.error('Mongodb 更新数据失败，原因：' + e);
        return false;
    });
};


/**
 * 更新多条数据(带操作符)
 * @param table_name 表名
 * @param conditions 查询条件 {"age":'28'}
 * @param update_fields 要更新的字段，完整的条件 {$set: { "name" : "一个伟大的人" }}
 * @param return 成功返回true,失败返回fasle
 */
DB.prototype.UpdateMany = async (table_name, conditions,update_fields)=>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.updateMany(conditions,update_fields, function(err, res) {
                if (err) throw err;
                resolve(res);
                DBServer.close();
            });
        });
    }).then(result =>{
        console.log(result);
        logger_db.info(result.result.nModified + "条文档被更新");
        return true;
    }).catch(e=>{
        logger_db.error('Mongodb 更新数据失败，原因：' + e);
        return false;
    });
};

/**
 * 删除单条数据
 * @param table_name 表名
 * @param conditions 删除需要的条件 {"uid":'38C6742B-6E6D-4193-A7E9-54FC6D0C336C'}
 * @param return 成功返回true,失败返回fasle
 */
DB.prototype.DeleteOne = async (table_name, conditions)=>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.deleteOne(conditions, function(err, res) {
                if (err) throw err;
                resolve(res);
                DBServer.close();
            });
        });
    }).then(result =>{
        return true;
    }).catch(e=>{
        logger_db.error('Mongodb 删除数据失败，原因：' + e);
        return false;
    });
};

/**
 * 删除多条数据
 * @param table_name 表名
 * @param conditions 删除需要的条件 {"age":'30'}
 * @param return 成功返回true,失败返回fasle
 */
DB.prototype.DeleteMany = async (table_name, conditions)=>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.deleteMany(conditions, function(err, res) {
                if (err) throw err;
                resolve(res);
                DBServer.close();
            });
        });
    }).then(result =>{
        logger_db.info(`${result.result.n}条文档被删除`);
        return true;
    }).catch(e=>{
        logger_db.error('Mongodb 删除数据失败，原因：' + e);
        return false;
    });
};

/**
 * 查询所有
 * @param table_name 表名
 * @param return 返回值，正确返回结果，错误返回false
 */
DB.prototype.FindAll = async table_name =>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.find({}).toArray(function(err, result) {
                if (err) throw err;
                resolve(result);
                DBServer.close();
            });
        });
    }).then(result =>{
        return result;
    }).catch(e=>{
        logger_db.error('Mongodb 查询集合内所有失败，原因：' + e);
        return false;
    });
}

/**
 * 按照条件查询
 * @param table_name 表名
 * @param condition 查询需要的条件例如 {"age":'30'}
 * @param return 成功返回结果,失败返回fasle
 */
DB.prototype.FindByCondition = async (table_name, condition)=>{
    return await new Promise((resolve,reject)=>{
        MongoClient.connect(dbURL,conf, function(err, DBServer) {
            if (err) throw err;
            var dbase = DBServer.db(dbName);
            var collection = dbase.collection(table_name);
            collection.find(condition).toArray(function(err, result) {
                if (err) throw err;
                resolve(result);
                DBServer.close();
            });
        });
    }).then(result =>{
        return result;
    }).catch(e=>{
        logger_db.error('Mongodb 安装条件查询失败，原因：' + e);
        return false;
    });
};


module.exports = new DB();