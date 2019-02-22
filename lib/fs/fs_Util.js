//依赖关系
const _ = require('lodash');
const moment = require('moment');
const path = require('path');
const uuidv4 = require('uuid/v4');
const fs = require('fs');

//文件操作工具
const fse = require('fs-extra')
var async = require("async");
var logger_fs = require('../../conf/Log/log.js').fs;


//定义函数
var fsUtil = function() {};


/**
 * 根据数组形式的路径，完整的文件名称，写入文件，如果文件存在则覆盖
 * @param arr 文件路径的数组
 * @param base_path 相对于这个数组路径之后的路径加上文件名称
 * @param content 文件内容
 */
fsUtil.prototype.writeFile_arr_josnfilebasepath = async(arr, base_path, content, callback) => {
    var now_path = '';
    for (i in arr) {
        now_path = path.join(now_path, arr[i])
    }
    var full_path = path.join(now_path, base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.writeFile(full_path, content, function(err) {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
    return do_fs;
};

/**
 * 根据数组形式的路径，相对于这个数组路径之后的路径加上文件名称，读取JSON文件
 * @param arr 文件路径的数组
 * @param base_path 相对于这个数组路径之后的路径加上文件名称
 * @param return 错误返回false,正确返回JSON的对象
 */
fsUtil.prototype.readerFile_arr_josnfilebasepath = async(arr, base_path) => {
    var now_path = '';
    for (i in arr) {
        now_path = path.join(now_path, arr[i])
    }
    var full_path = path.join(now_path, base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.readFile(full_path, 'utf8', (err, data) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                try {
                    var jsondata = JSON.parse(data)
                    resolve(jsondata);
                } catch (err) {
                    resolve(false);
                }
            }
        });
    });

    return do_fs;
};

/**
 * 根据文件完整路径读取文件，返回文件JSON对象
 * @param base_path 相对于这个数组路径之后的路径加上文件名称
 * @param return 错误返回false,正确返回JSON的对象
 */
fsUtil.prototype.readerFile_josnfilebasepath = async(base_path) => {
    var full_path = path.join(base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.readFile(full_path, 'utf8', (err, data) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                try {
                    var jsondata = JSON.parse(data)
                    resolve(jsondata);
                } catch (err) {
                    resolve(false);
                }
            }
        });
    });
    return do_fs;
};

/**
 * 根据文件完整路径读取文件，返回文件BASE64
 * @param base_path 相对于这个数组路径之后的路径加上文件名称
 * @param return 错误返回false,正确返回buffer
 */
fsUtil.prototype.readerFile_base64filebasepath = async(base_path) => {
    var full_path = path.join(base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.readFile(full_path, 'base64', (err, data) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(data);
            }
        });
    });

    return do_fs;
};

/**
 * 根据文件完整路径读取文件，返回文件buffer
 * @param base_path 相对于这个数组路径之后的路径加上文件名称
 * @param return 错误返回false,正确返回buffer
 */
fsUtil.prototype.readerFile_bufferfilebasepath = async(base_path) => {
    var full_path = path.join(base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.readFile(full_path, (err, data) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(data);
            }
        });
    });

    return do_fs;
};

/**
 * 根据文件夹路径，和一个文件名称的数组,返回一个数组，数组里是promise内部有buffer
 * 返回例子 [[promise{buffer}],[],[]]
 * @param base_path 文件夹路径
 * @param file_arr 文件名的数组
 * @param return 错误返回false,正确返回buffer
 */
fsUtil.prototype.readerFile_bufferfilearr = async(base_path,file_arr) => {
    //定义函数
    async function readFilebuffer(currentValue,index,arr){
        var full_path = path.join(base_path,currentValue);
        let buffer = await fsUtil.prototype.readerFile_bufferfilebasepath(full_path);
        return buffer;
    }
    //map出值
    let file_buffer_arr = file_arr.map(readFilebuffer)
    return file_buffer_arr;
};


/**
 * 根据数组形式的路径，相对于这个数组路径之后的路径加上文件名称，删除文件
 * @param arr 文件路径的数组
 * @param base_path 相对于这个数组路径之后的路径加上文件名称
 * @param return 错误返回false,正确true
 */
fsUtil.prototype.unlinkFile_arr_filebasepath = async(arr, base_path) => {
    var now_path = '';
    for (i in arr) {
        now_path = path.join(now_path, arr[i])
    }
    var full_path = path.join(now_path, base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.unlink(full_path, (err) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
    return do_fs;
};

/**
 * 根据文件完整路径删除文件
 * @param base_path 完整路径
 * @param return 错误返回false,正确true
 */
fsUtil.prototype.unlinkFile_filebasepath = async(base_path) => {
    var full_path = path.join(base_path);
    let do_fs = await new Promise((resolve, reject) => {
        fs.unlink(full_path, (err) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
    return do_fs;
};

/**
 * 根据文件夹路径删除整个文件夹
 * @param full_path 文件夹路径
 * @param return 错误返回false,正确true
 */
fsUtil.prototype.unlink_dir = async(path) => {
    return await new Promise((resolve, reject) => {
        var files = [];
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path);
            files.forEach(function(file, index) {
                var curPath = path + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    deleteall(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    }).then(() => {
        return true;
    }).catch(error => {
        return false;
    });
};

/**
 * 根据源文件路径加上文件名称，目标文件路径文件路径加上文件名称，进行复制文件，并删除源文件
 * @param path1 源文件路径加完整文件名
 * @param path2 目标文件路径加上完整文件名
 */
fsUtil.prototype.cutFile_to_file = async(path1, path2) => {
    var path1_join = path.join(path1);
    var path2_join = path.join(path2);
    let do_fs = await new Promise((resolve, reject) => {
        fs.copyFile(path1_join, path2_join, (err) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                fs.unlink(path1_join, (err) => {
                    if (err) {
                        logger_fs.error(err);
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                });
            };
        });
    });
    return do_fs;
};

/**
 *                 将文件夹1下面的所有文件拷贝到文件夹2下面
 * @param url1     文件夹1的路径
 * @param url2     文件夹2的路径
 * @param return   成功返回true,失败返回false
 */
fsUtil.prototype.Copy_Dir_To_Dir = async(url1, url2) => {
    let copy_doing = await new Promise((resolve, reject) => {
        fse.copy(path.join(url1), path.join(url2), err => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
    return copy_doing;
};

/**
 *                 给一个完整的路径，在路径下面创建一个随机并且唯一的文件夹，返回整体路径
 * @param return   url 给予的一个目标路径
 * @param return   成功返回整体路径,失败返回false
 */
fsUtil.prototype.Make_UUID_Dir = async(url) => {
    var dir_name = path.join(url, uuidv4().toUpperCase());
    return await new Promise((resolve, reject) => {
        fs.mkdir(dir_name, { recursive: true }, (err) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(dir_name);
            }
        });
    });
};

/**
 *                 给一个完整的路径，创建文件夹
 * @param return   url 给予的一个目标路径
 * @param return   成功true,失败返回false
 */
fsUtil.prototype.Make_Path_Dir = async(url) => {
    var dir_name = path.join(url);
    return await new Promise((resolve, reject) => {
        fs.mkdir(dir_name, { recursive: true }, (err) => {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            } else {
                resolve(dir_name);
            }
        });
    });
};

/**
 *                 给予两个路径文件，把第一个文件剪贴到第二个文件，剪贴后源文件删除
 * @param return   url1 需要剪贴的文件
 * @param return   url2 剪贴过后的文件
 * @param return   成功返回整体路径,失败返回false
 */
fsUtil.prototype.Cut_file_to_file = async(url1, url2) => {
    return await new Promise((resolve, reject) => {
        fs.rename(url1, url2, (err) => {
            if (err) {
                logger_fs.error(`剪贴文件失败：${err}`);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};

//导出模块接口
module.exports = new fsUtil();