//图像操作工具
const _ = require('lodash');
const moment = require('moment');
const path = require('path');
const fs = require('fs');
const gm = require('gm').subClass({imageMagick: true});
const fse = require('fs-extra')
const uuidv4 = require('uuid/v4');
var logger_fs = require('../../conf/Log/log.js').fs;


//定义函数
var gmUtil = function(){};

/**
 * 根据路径，完整的文件名，把其他格式的文件转换为png格式400*400的图片，删除之前的图片。
 * @param return 错误返回返回false 正确返回转换完成的路径加文件名称
 */
gmUtil.prototype.resize_i_400_png = async (filepath,filename) => {
    const resizename = uuidv4().toUpperCase();
    let do_gm = await new Promise((resolve,reject)=>{
        gm(path.join(filepath,filename)+'[0]')
        .resize(400, 400, '!')
        .noProfile()
        .write(path.join(filepath,resizename)+'.png', function (err) {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            }else{
                fs.unlink(path.join(filepath,filename), (err) => {
                    if (err) {
                        logger_fs.error(err);
                        resolve(false);
                    }else{
                        resolve(path.join(filepath,resizename)+'.png');
                    } 
                });
            }
        });
    });
    return do_gm;
};

/**
 * 根据路径，完整的文件名，把其他格式的文件转换为png格式200*200的图片，删除之前的图片。
 * @param return 错误返回返回false 正确返回转换完成的路径加文件名称
 */
gmUtil.prototype.resize_i_200_png = async (filepath,filename) => {
    const resizename = uuidv4().toUpperCase();
    let do_gm = await new Promise((resolve,reject)=>{
        gm(path.join(filepath,filename)+'[0]')
        .resize(200, 200, '!')
        .noProfile()
        .write(path.join(filepath,resizename)+'.png', function (err) {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            }else{
                fs.unlink(path.join(filepath,filename), (err) => {
                    if (err) {
                        logger_fs.error(err);
                        resolve(false);
                    }else{
                        resolve(path.join(filepath,resizename)+'.png');
                    } 
                });
            }
        });
    });
    return do_gm;
};


/**
 * 给目标文件添加水印，并替换目标文件，水印大小和目标文件一致，水印文件背景透明
 * @param sourceImg 源文件
 * @param watermarkImg 水印文件
 * @param return 错误返回返回false 正确返回true
 */
gmUtil.prototype.AddFullWatermark = async (sourceImg,watermarkImg) => {
    return await new Promise((resolve,reject)=>{
        //.geometry(`+0+0`) 偏移属性不加
        gm(sourceImg)
        .composite(watermarkImg)
        .gravity("NorthWest")
        .write(sourceImg, function (err) {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            }else{
                resolve(true);
            }
        });
    });
};

/**
 * 给目标文件添加水印，返回buffer
 * @param sourceImg 源文件
 * @param watermarkImg 水印文件
 * @param return 错误返回返回false 正确返回buffer
 */
gmUtil.prototype.AddBufferWatermark = async (sourceImg,watermarkImg) => {
    return await new Promise((resolve,reject)=>{
        //.geometry(`+0+0`) 偏移属性不加
        gm(sourceImg)
        .composite(watermarkImg)
        .gravity("NorthWest")
        .toBuffer('png',function (err, buffer) {
            if (err) {
                logger_fs.error(err);
                resolve(false);
            }else{
                resolve(buffer);
            }
        });
    });
};

/**
 * 给目录文件夹下的指定文件统一加上水印返回一个加好水印的数组
 * @param source_path 源文件文件夹的路径
 * @param source_img_arr 文件夹内文件名的数组
 * @param watermarkImg 水印文件的完整路径
 * @param return 错误返回返回false 正确返回一个数组，数组内是buffer
 */
gmUtil.prototype.AddArrayFileWatermark = async (source_path,source_img_arr,watermarkImg) => {
    var buffer_arr = [];
    for(i in source_img_arr){
        var full_path = path.join(source_path,source_img_arr[i]);
        let new_buffer = await gmUtil.prototype.AddBufferWatermark(full_path,watermarkImg);
        buffer_arr.push(new_buffer);
    }
    return buffer_arr;
};


/**
 * 获取目标buffer的原始信息，所有信息，
 * @param buffer 源文件的buffer
 * @param file_name 加后缀的文件名
 * @param return 错误返回返回false 正确返回true
 */
gmUtil.prototype.GetBufferInfo = async (buffer,file_name) => {
    return await new Promise((resolve,reject)=>{
        //.geometry(`+0+0`) 偏移属性不加
        gm(buffer,file_name)
        .identify(function (err, data) {
          if (err) {
                logger_fs.error(err);
                resolve(false);
            }else{
                resolve(data);
            }
        });
    });
};


//导出对象
module.exports = new gmUtil();