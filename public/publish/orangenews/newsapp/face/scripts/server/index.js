/*弹出层相关部分函数*/

/*
 *打开层
 *所有的url都是以newsapp为主的
 */

//默认打开一个层
function layer_show_newsapp(url){
	layer.open({
      type: 2,
      closeBtn: 0,
      title: false,
      shadeClose: true,
      shade: false,
      shift: 0,
      area: ['100%', '100%'],
      content: '../'+url
    });
}

//第二个参数是打开层的动画形式，0-6
function layer_show_newsapp_shift_index(url,shift_index){
  layer.open({
      type: 2,
      closeBtn: 0,
      title: false,
      shadeClose: true,
      shade: false,
      shift: shift_index,
      area: ['100%', '100%'],
      content: '../'+url
    });
}


/*
 *打开一个外包链接
 *所有的url都是可以直接查看
 */

//默认打开一个连接
function layer_show_show_frmurl(url){
	layer.open({
      type: 2,
      closeBtn: 0,
      title: false,
      shadeClose: true,
      shade: false,
      shift: 2,
      area: ['100%', '100%'],
      content: url
    });
}

/*
 *关闭所有弹出层
 */

//默认关闭所有层
function layer_close_newsapp_all(){
	layer.closeAll();
}

