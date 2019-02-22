//页面内部使用的公用方法


/*
	在弹出层的内部使用跟这个方法，作用是关闭当前的弹出层
*/
function layer_goback(){
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}