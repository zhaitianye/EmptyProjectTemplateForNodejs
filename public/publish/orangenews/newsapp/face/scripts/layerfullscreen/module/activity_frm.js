/*橙新闻-新闻详细-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".activity_in_detail_header").load("../../../../view/layerfullscreen/common/pub/mine_frm/header.html",function(data){
       $("#activity .tit").text("服务");
    });  
});

