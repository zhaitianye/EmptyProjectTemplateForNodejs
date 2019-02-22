/*各个列表模块使用的js里面用层级关系分开，都在这里面写*/

$(document).ready(function(){
	/*例子*/
	/*这个是template_0003部分的相关js*/
	$("section").find(".template_0003").find(".location").click(function(){
	    console.log(1);
	});
	/*这个是template_0003部分的相关js结束*/

	/* 首页swiper template_0004*/ 
	var swiper = new Swiper('.swiper-container1', {
		slidesPerView: 'auto',
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper = new Swiper('.swiper-container2', {
		slidesPerView: 'auto',
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	/* 首页swiper template_0004*/ 
	$(".template_0003 .delt").click(function(){
		window.top.layer_show_newsapp_shift_index('newsapp/view/layerfullscreen/common/set/item_set.html',2);
	});
});


