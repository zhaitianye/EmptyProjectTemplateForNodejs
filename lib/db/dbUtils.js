//依赖关系
const moment = require('moment');
const uuidv4 = require('uuid/v4');
var mysql = require('mysql');
var funUtils = require('../comm/funUtils.js')
var logger_db = require('../../common/Log/log.js').DB;


//定义函数
var dbUtil = function(){};



/**
 * 测试
 * @param table_name 需要查询的表名
 */
dbUtil.prototype.test = async (table_name) => {
    /*拼接sql*/
	return(123);
};


//导出模块接口
module.exports = new dbUtil();