$(document).ready(function () {
	slider();
	gallery();
	listSlider();
	$('.js-subscribe').on('click', function(event) {
		event.preventDefault();
		$(".subscribe-popup").parent().fadeIn();
	});
	$(".overlay").on('click', function() {
		$(this).fadeOut();
	});
	$('.popup').on('click', function(event) {
		event.stopPropagation();
	});
});

$(window).resize(function () {

});

$(window).load(function () {
	// нужно дождаться конца всей анимации
var a1 = $.Deferred(),
  a2 = $.Deferred();

$('#d1').slideUp(2000, a1.resolve);
$('#d2').slideUp(4000, a2.resolve);

a1.done(function() { console.log('a1'); });
a2.done(function() { console.log('a2'); });
$.when(a1, a2).done(function() { console.log('both'); });
});


var popup = function () {
	$(".overlay").on("click", function () {
		$(this).fadeOut();
		$('.popup').fadeOut();
	})
	$(".popup").find(".close").on("click", function () {
		$(".overlay").fadeOut();
		$('.popup').fadeOut();
	});

}
var tabs = function () {
	var tab = $(".tabs");
	if (tab.length) {
		tab.each(function () {
			var idx = $(this).find(".tab-nav .active").index();
			$(this).find('.tab-content .tab').hide().eq(idx).show();
		});


		tab.find(".tab-nav a").click(function (event) {
			event.preventDefault();

			if ($(this).hasClass("active")) {
				return false;
			} else {
				$(this).parents('.tabs').find(".tab-nav a").removeClass('active');
				var idx = $(this).addClass("active").index();
				$(this).parents('.tabs').find(".tab-content .tab").hide();
				$(this).parents('.tabs').find(".tab-content .tab").eq(idx).show();
			}
		});
	}
}

var slider = function () {
	if ($('.slider').length) {
		$('.slider').slidesjs({
			//	width: 940,
			height: 540,
			pagination: {
				active: false
			}
		});
	}
}

var gallery = function () {
	var galeryContainer = $('.galery-container');
	var galeryPreviewLinks = galeryContainer.find('.nav-small').find('a');
	if (galeryContainer.length) {
		galeryPreviewLinks.on('click', function(e){
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				galeryPreviewLinks.removeClass('active');
				var src = $(this).addClass('active').data('src');
				galeryContainer.find('.big-preview').find('img').attr('src', src);

			}
		})
	}
}

var listSlider = function () {
	$(".slide-list").find(".heading-slide").on("click", function() {
		$(this).parent().toggleClass('active').find('.slide-container').slideToggle();
	});
}