;
(function($, window, undefined) {
	'use strict';

	var $doc = $(document),
		Modernizr = window.Modernizr;


	$.fn.foundationAlerts ? $doc.foundationAlerts() : null;
	$.fn.foundationAccordion ? $doc.foundationAccordion() : null;
	$.fn.foundationTooltips ? $doc.foundationTooltips() : null;
	$('input, textarea').placeholder();


	$.fn.foundationButtons ? $doc.foundationButtons() : null;



	$.fn.foundationCustomForms ? $doc.foundationCustomForms() : null;
	$.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;



	// UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
	// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
	// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
	// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
	// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

	// Hide address bar on mobile devices
	if (Modernizr.touch) {
		$(window).load(function() {
			setTimeout(function() {
				window.scrollTo(0, 1);
			}, 0);
		});
	}

})(jQuery, this);

function colorToHex(color) {
	var rgb = blue | (green << 8) | (red << 16);
	return '#' + rgb.toString(16);
};

function resizeMe() {
	var th = $('#titleRow').height();
	var ch = $('#colorsRow').height();
	var rh = $('#resultRow').height();
	var wh = $(window).height();
	var total = th + ch + rh;

	var dif;
	if (total < wh)
		dif = (wh - total) / 5;
	else
		dif = 15;

	if (dif < 0)
		dif = 0;
	$('#titleRow, #colorsRow, #resultRow').css('marginTop', dif + 'px');

}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

$(document).ready(function() {
	var rgb, rgba, rgbmsg, hex, hexnum, r, g, b, opcity,plac;
	$('.colorBox').on("keydown", function(event) {
		// Allow: backspace, delete, tab, escape, and enter
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
			// Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
			// Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			// let it happen, don't do anything
			return;
		} else {
			// Ensure that it is a number and stop the keypress
			if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	});

	function setview() {
		if (opcity) {
			rgba = "rgba(" + r + "\," + g + "\," + b + "\," + opcity + "\)";
		}else{
			opcity === 0 && (rgba = null);
		}
		rgb = "rgb(" + r + "\," + g + "\," + b + "\)";
		var shadow = "5px 5px 10px "+ (rgba || hex);
		$('.resultHex').text(hex);
		$("#rgbview").text(rgba || rgb);
		$('#setcolor').val(hex);
		$('#showcolor').css("background-color", rgba || hex);
		$('#showborder').css('border-color',rgba || hex);
		$('.back').css('box-shadow',shadow);
	}
	$('.colorBox').on("keyup", function() {
		if (this.id === "opcity") {
			if (this.value > 100) {
				$(this).val(100);
			};
		}
		if (this.value > 255) {
			$(this).val(255);
		};
		if (this.value < 0) {
			$(this).val(0);
		};
		r = parseInt($('#colorR').val());
		g = parseInt($('#colorG').val());
		b = parseInt($('#colorB').val());
		var opt = $('#opcity').val()
		opcity = opt ? (opt / 100) : 0;
		r = (r ? (r < 0 ? 0 : (r > 255 ? 255 : r)) : 0);
		g = (g ? (g < 0 ? 0 : (g > 255 ? 255 : g)) : 0);
		b = (b ? (b < 0 ? 0 : (b > 255 ? 255 : b)) : 0);
		hex = rgbToHex(r, g, b);
		hexnum = hex.replace('#',"");
		$('#hexnum').val(hexnum);
		setview();
	});

	$('.colorBox').blur(function() {
		if ($(this).val().length == 0) {
			$(this).val('0');
		}
		$(this).keyup();
	});
	$('.colorBox').focus(function() {
		$(this).select();
	});
	$('.colorBox').mouseup(function(e) { // fix for chrome and safari
		e.preventDefault();
	});
	resizeMe();
	$("#plac").on("keyup", function() {
		var self = $(this);
		if (self.val()) {
			plac = self.val();
			rgb = $.Color(plac);
			r = rgb._rgba[0];
			g = rgb._rgba[1];
			b = rgb._rgba[2];
			hex = rgbToHex(r, g, b);
			$("#hexnum").val(hex.replace('#',""));
			$('#colorR').val(rgb._rgba[0]);
			$('#colorG').val(rgb._rgba[1]);
			$('#colorB').val(rgb._rgba[2]);
			setview();
		}
	});
	$("#hexnum").on("keyup", function() {
		var self = $(this),
			tex = new RegExp("[^0-9a-fA-F]{1,6}");
		hexnum = self.val();

		function texis(a) {
			var f = "";
			$.each(a, function(n, s) {
				f += "f";
			});
			var str = Array.prototype.toString;
			return f;
		}
		if (tex.test(hexnum)) {
			hexnum = hexnum.replace(tex, texis);
			self.val(hexnum);
		};
		hex = "#" + self.val();
		if (self.val()) {
			rgb = $.Color(hex);
			r = rgb._rgba[0];
			g = rgb._rgba[1];
			e = rgb._rgba[2];
			$('#colorR').val(rgb._rgba[0]);
			$('#colorG').val(rgb._rgba[1]);
			$('#colorB').val(rgb._rgba[2]);
			setview();
		}
	});
});
$(window).resize(resizeMe);