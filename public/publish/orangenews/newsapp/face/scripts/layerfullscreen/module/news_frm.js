/*橙新闻-新闻详细-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".news_in_detail_header").load("../../../../view/layerfullscreen/common/pub/news_frm/header.html",function(data){});
    $(".news_in_detail_footer").load("../../../../view/layerfullscreen/common/pub/news_frm/footer.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});

/*橙新闻-新闻详细-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".home_in_detail_header").load("../../../../view/layerfullscreen/common/pub/news_frm/homeheader.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});

/*橙新闻-列表-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".list_in_detail_header-f").load("../../../../view/layerfullscreen/common/pub/news_frm/listheader-f.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});
/*橙新闻-列表-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".list_in_detail_header-z").load("../../../../view/layerfullscreen/common/pub/news_frm/listheader-z.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});
/*橙新闻-列表-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".list_in_detail_header-w").load("../../../../view/layerfullscreen/common/pub/news_frm/listheader-w.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});
/*橙新闻-列表-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".service_in_detail_header").load("../../../../view/layerfullscreen/common/pub/news_frm/serviceheader.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});
/*橙新闻-列表-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".tip_in_detail_header").load("../../../../view/layerfullscreen/common/pub/news_frm/tipheader.html",function(data){});
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".news_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".news_timely").text(news_text);
    }
});

