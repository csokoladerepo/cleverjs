/*
Clever.js
Intelligent ads banners for your site
ver:1.0
release date:2012.06.28
author: Csokolade Labs DN - https://csokolade.eu
*/
$(document).ready(function () {

	if ($(window).width() < 1305) {
		$(".clever").hide();
	} else {
		var swidth = $(window).width();

		if (swidth == 1305) {
			var design_width = 980;
		} else {
			var design_width = 1020;
		}

		var left_pos = 0,
			left_margo = 0;
		var right_pos = 0;

		left_margo = (swidth - design_width) / 2;
		if ((left_margo - 157) < 0) left_pos = 0;
		else left_pos = (left_margo - 157);
		right_pos = left_margo + design_width;
		$("#clever_left").css("margin-left", left_pos);
		$("#clever_right").css("margin-left", right_pos);
		$(".clever").show();
	}
});