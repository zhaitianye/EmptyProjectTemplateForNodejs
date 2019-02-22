//依赖关系
const moment = require('moment');
const uuidv4 = require('uuid/v4');
const path = require('path');

//定义函数
var funUtil = function(){};



/**
 * 判断传进来的数值是不是为json对象，
 * @param str 传进来的对象
 */
funUtil.prototype.IsJsonObj = str => {
    if (typeof(str) == "object" && Object.prototype.toString.call(str).toLowerCase() == "[object object]" && !str.length) {
        return true;
    } else {
        return false;
    }
};


/**
 * 更新数据时候修改系统字段
 * @param _cLastMan 最后的操作人
 * @param old_nVersion 旧版本号
 */
funUtil.prototype.SystemUPtimeAndVersion = (_cLastMan,old_nVersion) => {
    return {
        cLastMan: _cLastMan,
        dLastTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        nVersion: old_nVersion + 1,
    }
};

/**
 * 判断传入的值中有没有undefined，用于初始值的检测
 * @param arr 传入的数组
 * @param return 如果都不是undefined则返回true，如有则返回false
 */
funUtil.prototype.ArrIncludeUndefined = (arr) => {
	var count = 0;
	for(i in arr){
		if (typeof(arr[i]) == "undefined"){ 
		    return false;
		}
		count++;
		if (count == arr.length) {
			return true;
		}
	}
};

/**
 * 传入数组,拼接成路径
 * @param arr 传入的数组
 * @param return 返回按照数组0123拼接成的路径
 */
funUtil.prototype.ArrToPath = (arr) => {
	var now_path = '';
	for(i in arr){
		now_path = path.join(now_path,arr[i])
	}
	return now_path;
};


/**
 * 根据参数构建Resmetadata
 * @param resdata 需要返回的元数据，里面包含res_code,res_data,res_message,res_success
 * @param success 成功或者失败，true，false
 * @param code 状态码，200，500等标准码
 * @param msg 提示信息
 * @param data 数据
 */
funUtil.prototype.BuildResmetadata = (resdata, success, code, msg, data) => {
    resdata.res_success = success;
    resdata.res_code = code;
    resdata.res_message = msg;
    resdata.res_data = data;
    return resdata;
};

/**
 * 直接返回服务器错误的信息
 */
funUtil.prototype.ErrorResmetadata = () => {
    var metadata = {
        "res_content":
            {
                "res_success": false,
                "res_message": "服务器内部错误",
                "res_code": 500
            }
    }
    return metadata;
};

//导出模块接口
module.exports = new funUtil();