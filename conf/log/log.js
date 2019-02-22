var log4js = require('log4js');

 /**
 * 定义log4js
 * @param static 常规日志
 * @param email 邮件日志
 * @param phone 发送手机验证码日志
 * @param DB 数据库相关的信息日志
 * @param request 重要请求相关信息日志
 * @param response 重要回复相关信息日志
 * @param error 常规错误的日志
 * @param pay 支付方面，涉及到金额方面的日志
 */
log4js.configure({
    appenders: {
        static: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/static/static', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        email: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/email/email', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        phone: {
            type: 'dateFile', //类型为手机类型的文件
            filename: './data/log/phone/phone', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        DB: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/DB/DB', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        fs: {
            type: 'dateFile', //类型为文件类型的模块
            filename: './data/log/fs/fs', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        request: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/request/request', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        response: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/response/response', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        error: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/error/error', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        pay: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/pay/pay', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
        middleware: {
            type: 'dateFile', //类型为日期类型的文件
            filename: './data/log/middleware/middleware', //您要写入日志文件的路径
            pattern: '-yyyy-MM-dd', //用于确定何时滚动日志的模式。
            alwaysIncludePattern: true, //将模式包含在当前日志文件的名称以及备份中
            maxLogSize: 20 * 1024 * 1024, //文件最大存储空间  
            encoding: 'utf-8', //文件的编码
            compress: false //在滚动期间压缩备份文件（备份文件将具有.gz扩展名）              
        },
    },
    categories: {
        default: {
            appenders: ['static'],
            level: 'ALL'
        },
        static: {
            appenders: ['static'],
            level: 'ALL'
        },
        email: {
            appenders: ['email'],
            level: 'ALL'
        },
        phone: {
            appenders: ['phone'],
            level: 'ALL'
        },
        DB: {
            appenders: ['DB'],
            level: 'ALL'
        },
        fs: {
            appenders: ['fs'],
            level: 'ALL'
        },
        request: {
            appenders: ['request'],
            level: 'ALL'
        },
        response: {
            appenders: ['response'],
            level: 'ALL'
        },
        error: {
            appenders: ['error'],
            level: 'ALL'
        },
        pay: {
            appenders: ['pay'],
            level: 'ALL'
        },
        middleware: {
            appenders: ['middleware'],
            level: 'ALL'
        },
    },
    pm2: true
});

var logger = {};

logger.default = log4js.getLogger("default");
logger.static = log4js.getLogger("static");
logger.email = log4js.getLogger("email");
logger.phone = log4js.getLogger("phone");
logger.fs = log4js.getLogger("fs");
logger.request = log4js.getLogger("request");
logger.response = log4js.getLogger("response");
logger.error = log4js.getLogger("error");
logger.pay = log4js.getLogger("pay");
logger.DB = log4js.getLogger("DB");
logger.middleware = log4js.getLogger("middleware");


//导出模块接口
module.exports = logger;

/*导出中间件*/
/*exports.use = function(app) {
    app.use(log4js.connectLogger(dateFileLog, { level: 'WARN', format: ':method :url' }));
};*/