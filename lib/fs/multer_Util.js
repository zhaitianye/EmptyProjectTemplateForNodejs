//文件上传工具
var multer = require('multer');
const uuidv4 = require('uuid/v4');

var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function(req, file, cb) {
        cb(null, './public/upload')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function(req, file, cb) {
        cb(null, uuidv4().toUpperCase());
    }
});
//添加配置文件到muler对象。设置文件大小最大为50M
var upload = multer({
    storage: storage,
    limits:{
    	fileSize:50*1024*1024,
    	files:50*1024*1024,
    }
});



//导出对象
module.exports = upload;