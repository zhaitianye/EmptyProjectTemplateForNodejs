//依赖关系
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors');

//引入默认日志，全局都可以写默认日志
logger = require("./conf/log/log.js").default;


//中间件部分
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//路由模块
var router = require('./lib/router/router.js');
router(app);



//404错误
app.use(function (req, res, next) {
    next(createError(404));
});
//500错误，服务器内部错误,设置局部变量，只在开发中提供错误,显示错误页面
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//导出模块接口
module.exports = app;