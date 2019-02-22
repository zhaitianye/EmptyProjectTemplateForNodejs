/*橙新闻-新闻详细-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".live_in_detail_header").load("../../../../view/layerfullscreen/common/pub/news_frm/header.html",function(data){});
    $(".live_in_detail_footer").load("../../../../view/layerfullscreen/common/pub/news_frm/footer.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".live_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".live_timely").text(news_text);
    }
});

