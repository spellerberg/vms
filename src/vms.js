(function($) {

	function sendMotivation(choice) {
		if ($.type(window.ga) === "function") {
			var tracker = window.ga.getAll()[0].get('name');
			window.ga(tracker + '.set', 'dimension1', choice);
			window.ga(tracker + '.send', 'pageview');
		}
	}

	function closeSurvey() {

		if ( $(".mquery").css("float") === "left" ) {
			$('.vms').stop().slideUp('fast');
		} else {
			$('.vms').hide();
		}

		$.cookie('hidevms', 'on');
	}

	function init() {

		if ( $.cookie('hidevms') === 'on' ) {
			$('.vms').hide();
		}

	    $('.prompt').on('click', function() {
			if ( $(this).hasClass('clickable') ) {

				$(this).removeClass('clickable');
				$('.vms').addClass('open');
				$('.dismiss').hide();
				$('.shrink').show();

				if ( $(".mquery").css("float") === "left" ) {
					$('.survey').stop().slideDown('fast');
				} else {
					$('.survey').show();
				}

			}
	    });

		$('.shrink').on('click', function() {

			if ( $(".mquery").css("float") === "left" ) {

				$('.survey').stop().slideUp('fast', function() {
					$('.shrink').hide();
					$('.dismiss').show();
					$('.prompt').addClass('clickable');
				});

			} else {

				$('.survey').hide();
				$('.shrink').hide();
				$('.dismiss').show();
				$('.prompt').addClass('clickable');
			}

			$('.vms').removeClass('open');

	    });

		$('.dismiss').on('click', function() {
			closeSurvey();
	    });

		$('.finish').on('click', function() {
			closeSurvey();
	    });

	    $('.done').on('click', function(e) {
			if ( $(this).hasClass('clickable') ) {
				closeSurvey();
			}
	    });

	    $('.survey ul a').on('click', function(e) {
			e.preventDefault();
			$('.survey a').removeClass('active');
			$(this).addClass('active');
			$('.done').addClass('clickable');
			$('.shrink').hide();
			$('.finish').show();
	    });

	    $('.done').on('click', function(e) {
			if ( $(this).hasClass('clickable') ) {
				$('.vms').stop().slideUp('fast');
			}
	    });


	    $('.infobutton').on('click', function(e) {
			e.preventDefault();
			$(this).removeClass('clickable');

			if ( $(".mquery").css("float") === "left" ) {
				$('.infotext').slideDown('fast');
			} else {
				$('.infotext').show();
			}

	    });

		/* Votes */

		$('.recharger').on('click', function(e) {
			e.preventDefault();
			sendMotivation('Recharger');
		});

		$('.explorer').on('click', function(e) {
			e.preventDefault();
			sendMotivation('Explorer');
		});

		$('.facilitator').on('click', function(e) {
			e.preventDefault();
			sendMotivation('Facilitator');
		});

		$('.seeker').on('click', function(e) {
			e.preventDefault();
			sendMotivation('Seeker');
		});

		$('.professional').on('click', function(e) {
			e.preventDefault();
			sendMotivation('Professional');
		});

	}

	// Hook into main init routine
	Site.onInit.push(init);
	return {
		init: init
	};

})(jQuery);
