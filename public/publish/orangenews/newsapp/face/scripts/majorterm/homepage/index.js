$(document).ready(function(){
	/*用于控制iframe的加载和相关的缓存*/
	$(".detailpage_frm").on("load",function(){
		$(this).attr("is_onload","1");
	});
	/*推荐*/
	$(".frm_control_recommend").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_recommend").attr("is_onload");
		var src_url = $(".frm_show_recommend").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_recommend").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_recommend").addClass("show_frm");
			$(".frm_show_recommend").attr("src",src_url);
		}
	});
	/*睇片*/
	$(".frm_control_seepiece").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_seepiece").attr("is_onload");
		var src_url = $(".frm_show_seepiece").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_seepiece").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_seepiece").addClass("show_frm");
			$(".frm_show_seepiece").attr("src",src_url);
		}
	});
	/*創意設計*/
	$(".frm_control_thingsaround").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_thingsaround").attr("is_onload");
		var src_url = $(".frm_show_thingsaround").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_thingsaround").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_thingsaround").addClass("show_frm");
			$(".frm_show_thingsaround").attr("src",src_url);
		}
	});
	/*资讯*/
	$(".frm_control_information").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_information").attr("is_onload");
		var src_url = $(".frm_show_information").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_information").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_information").addClass("show_frm");
			$(".frm_show_information").attr("src",src_url);
		}
	});
	/*财经*/
	$(".frm_control_finance").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_finance").attr("is_onload");
		var src_url = $(".frm_show_finance").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_finance").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_finance").addClass("show_frm");
			$(".frm_show_finance").attr("src",src_url);
		}
	});
	/*生活*/
	$(".frm_control_live").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_live").attr("is_onload");
		var src_url = $(".frm_show_live").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_live").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_live").addClass("show_frm");
			$(".frm_show_live").attr("src",src_url);
		}
	});
	/*文化*/
	$(".frm_control_culture").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_culture").attr("is_onload");
		var src_url = $(".frm_show_culture").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_culture").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_culture").addClass("show_frm");
			$(".frm_show_culture").attr("src",src_url);
		}
	});
	/*美人计*/
	$(".frm_control_honey-trap").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_honey-trap").attr("is_onload");
		var src_url = $(".frm_show_honey-trap").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_honey-trap").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_honey-trap").addClass("show_frm");
			$(".frm_show_honey-trap").attr("src",src_url);
		}
	});
	/*公仔纸*/
	$(".frm_control_paper-doll").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_paper-doll").attr("is_onload");
		var src_url = $(".frm_show_paper-doll").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_paper-doll").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_paper-doll").addClass("show_frm");
			$(".frm_show_paper-doll").attr("src",src_url);
		}
	});
	/*评论*/
	$(".frm_control_comment").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_comment").attr("is_onload");
		var src_url = $(".frm_show_comment").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_comment").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_comment").addClass("show_frm");
			$(".frm_show_comment").attr("src",src_url);
		}
	});
	/*专题*/
	$(".frm_control_special").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_special").attr("is_onload");
		var src_url = $(".frm_show_special").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_special").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_special").addClass("show_frm");
			$(".frm_show_special").attr("src",src_url);
		}
	});
	/*運動健康*/
	$(".frm_control_healthy").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_healthy").attr("is_onload");
		var src_url = $(".frm_show_healthy").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_healthy").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_healthy").addClass("show_frm");
			$(".frm_show_healthy").attr("src",src_url);
		}
	});
	/*飲食*/
	$(".frm_control_cook").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_cook").attr("is_onload");
		var src_url = $(".frm_show_cook").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_cook").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_cook").addClass("show_frm");
			$(".frm_show_cook").attr("src",src_url);
		}
	});
	/*馬拉松賽事*/
	$(".frm_control_marathon").click(function(){
		$(this).addClass("visited").siblings().removeClass("visited");
		var is_onload = $(".frm_show_marathon").attr("is_onload");
		var src_url = $(".frm_show_marathon").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_marathon").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_marathon").addClass("show_frm");
			$(".frm_show_marathon").attr("src",src_url);
		}
	});
	/*用于控制iframe的加载和相关的缓存结束*/
});