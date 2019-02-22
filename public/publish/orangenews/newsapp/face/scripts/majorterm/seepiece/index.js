$(document).ready(function(){
	/*用于控制iframe的加载和相关的缓存*/
	$(".detailpage_frm").on("load",function(){
		$(this).attr("is_onload","1");
	});
	/*全部剔片*/
	$(".frm_control_seepieceall").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_seepieceall").attr("is_onload");
		var src_url = $(".frm_show_seepieceall").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_seepieceall").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_seepieceall").addClass("show_frm");
			$(".frm_show_seepieceall").attr("src",src_url);
		}
	});
	/*直播*/
	$(".frm_control_livestreaming").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_livestreaming").attr("is_onload");
		var src_url = $(".frm_show_livestreaming").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_livestreaming").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_livestreaming").addClass("show_frm");
			$(".frm_show_livestreaming").attr("src",src_url);
		}
	});
	/*短视频*/
	$(".frm_control_shortvideo").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_shortvideo").attr("is_onload");
		var src_url = $(".frm_show_shortvideo").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_shortvideo").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_shortvideo").addClass("show_frm");
			$(".frm_show_shortvideo").attr("src",src_url);
		}
	});
	/*专题*/
	$(".frm_control_special").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
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
	/*专访*/
	$(".frm_control_exclusiveinterview").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_exclusiveinterview").attr("is_onload");
		var src_url = $(".frm_show_exclusiveinterview").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_exclusiveinterview").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_exclusiveinterview").addClass("show_frm");
			$(".frm_show_exclusiveinterview").attr("src",src_url);
		}
	});
	/*动画图解*/
	$(".frm_control_animatedgraphic").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_animatedgraphic").attr("is_onload");
		var src_url = $(".frm_show_animatedgraphic").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_animatedgraphic").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_animatedgraphic").addClass("show_frm");
			$(".frm_show_animatedgraphic").attr("src",src_url);
		}
	});
	/*mycookie*/
	$(".frm_control_mycookie").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_mycookie").attr("is_onload");
		var src_url = $(".frm_show_mycookie").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_mycookie").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_mycookie").addClass("show_frm");
			$(".frm_show_mycookie").attr("src",src_url);
		}
	});
	/*sportihealth*/
	$(".frm_control_sportihealth").click(function(){
		$(this).addClass("visited-t").siblings().removeClass("visited-t");
		var is_onload = $(".frm_show_sportihealth").attr("is_onload");
		var src_url = $(".frm_show_sportihealth").attr("load_src");
		if (is_onload == "1") {
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_sportihealth").addClass("show_frm");
		}else{
			$(".detailpage_frm").removeClass("show_frm");
			$(".frm_show_sportihealth").addClass("show_frm");
			$(".frm_show_sportihealth").attr("src",src_url);
		}
	});
	/*用于控制iframe的加载和相关的缓存结束*/
});