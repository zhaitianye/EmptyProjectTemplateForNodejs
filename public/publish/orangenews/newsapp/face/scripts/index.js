//供view层下index.html使用，主要是底部导航框架部分
$(document).ready(function(){
	/*用于控制iframe的加载和相关的缓存*/
	$(".card_frm").on("load",function(){
		$(this).attr("is_onload","1");
	});
	/*主页*/
	$(".frm_control_homepage").click(function(){
		var is_onload = $(".frm_show_homepage").attr("is_onload");
		var src_url = $(".frm_show_homepage").attr("load_src");
		if (is_onload == "1") {
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_homepage").addClass("show_frm");
		}else{
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_homepage").addClass("show_frm");
			$(".frm_show_homepage").attr("src",src_url);
		}
	});
	/*影片*/
	$(".frm_control_seepiece").click(function(){
		var is_onload = $(".frm_show_seepiece").attr("is_onload");
		var src_url = $(".frm_show_seepiece").attr("load_src");
		if (is_onload == "1") {
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_seepiece").addClass("show_frm");
		}else{
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_seepiece").addClass("show_frm");
			$(".frm_show_seepiece").attr("src",src_url);
		}
	});
	/*服务*/
	$(".frm_control_service").click(function(){
		var is_onload = $(".frm_show_service").attr("is_onload");
		var src_url = $(".frm_show_service").attr("load_src");
		if (is_onload == "1") {
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_service").addClass("show_frm");
		}else{
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_service").addClass("show_frm");
			$(".frm_show_service").attr("src",src_url);
		}
	});
	/*我的*/
	$(".frm_control_mine").click(function(){
		var is_onload = $(".frm_show_mine").attr("is_onload");
		var src_url = $(".frm_show_mine").attr("load_src");
		if (is_onload == "1") {
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_mine").addClass("show_frm");
		}else{
			$(".card_frm").removeClass("show_frm");
			$(".frm_show_mine").addClass("show_frm");
			$(".frm_show_mine").attr("src",src_url);
		}
	});
	//底部導航的顏色以及圖片的轉換js
	$(".main_bottom_nav").find(".btn_box").click(function(){
		//移除所有選中顏色和樣式,并添加當前
		$(".main_bottom_nav").find(".btn_box").each(function(){
			var nolink_src = $(this).find('img').attr("no_link_src");
			$(this).find('img').attr("src",nolink_src);
			$(this).removeClass("btn_active");
		});
		var link_src = $(this).find('img').attr("link_src");
		$(this).find('img').attr("src",link_src);
		$(this).addClass("btn_active");
	});
	/*用于控制iframe的加载和相关的缓存结束*/
});