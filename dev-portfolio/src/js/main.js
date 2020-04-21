/*
	Overflow by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 10

		};

	// Breakpoints.
		breakpoints({
			wide:    [ '1081px',  '1680px' ],
			normal:  [ '841px',   '1080px' ],
			narrow:  [ '737px',   '840px'  ],
			mobile:  [ null,      '736px'  ]
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-scroll');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly-middle').scrolly({
			speed: 1000,
			anchor: 'middle'
		});

		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return (breakpoints.active('<=mobile') ? 70 : 190); }
		});

	// Poptrox.
		$('.gallery').poptrox({
			useBodyOverflow: false,
			usePopupEasyClose: false,
			overlayColor: '#0a1919',
			overlayOpacity: 0.75,
			usePopupDefaultStyling: false,
			usePopupCaption: true,
			popupLoaderText: '',
			windowMargin: 10,
			usePopupNav: true
		});

})(jQuery);