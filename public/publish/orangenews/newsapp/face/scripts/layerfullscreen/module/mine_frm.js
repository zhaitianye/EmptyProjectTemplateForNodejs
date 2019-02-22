/*橙新闻-新闻详细-外层框架部分js*/
$(document).ready(function(){
	//加载头部尾部
    $(".mine_in_detail_header").load("../../../../view/layerfullscreen/common/pub/mine_frm/header.html",function(data){
       $("#activity .tit").text("我的活动");
       $("#ad .tit").text("广告投放");
       $("#notice .tit").text("通知");
       $("#card .tit").text("orange pass");
       $("#collection .tit").text("我的收藏");
       $("#contact .tit").text("关于我们");
       $("#coupon .tit").text("我的优惠劵");
       $("#info .tit").text("个人资料");
       $("#notice .tit").text("通知");
       $("#tipoff .tit").text("我的爆料");
       $("#login .tit").text("登录");
       $("#rule .tit").text("隐私条款");
    });
    //读取日期进行格式化
    formatetime_v1();
    function formatetime_v1(){
    	moment.locale('zh-cn');
    	var times = $(".mine_timely").text();
    	var news_text = `${times} 更新: ${moment(times).fromNow()}`
    	$(".mine_timely").text(news_text);
    }
    

    var swiper = new Swiper('.swiper-container1', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
  
});

