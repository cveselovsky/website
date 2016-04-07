(function() {

	// --------------------------------------------------------------------------[ MAIN MENU TOGGLE ]
	$('.nav-toggle').click(function(e) {
		$('.nav--global').toggleClass('open');
	});

	// --------------------------------------------------------------------------[ TAB PANELS ]
	// From: http://accessibility.athena-ict.com/aria/examples/tabpanel2.shtml
	$("li[role='tab']").click(function(e){
		e.preventDefault();

		var $clickedTab = $(this),
			tabpanid= $clickedTab.attr("aria-controls"), //find out what tab panel this tab controls  
	  		$tabpan = $("#"+tabpanid),  //get the panel itself
	  		alreadyOpen = false;

	  	if ($clickedTab.attr("aria-selected") == "true") {
	  		alreadyOpen = true;
	  	}

		$("li[role='tab']").attr("aria-selected","false"); //deselect all the tabs 
		$("div[role='tabpanel']").attr("aria-hidden","true"); //hide all the panels 

		if (!alreadyOpen) {
		 	$clickedTab.attr("aria-selected","true");  // select this tab		
			$tabpan.attr("aria-hidden","false"); // show our panel
		}

		$clickedTab.blur();
	});

	// --------------------------------------------------------------------------[ TESTIMONIAL SLIDER ]
	$('.testimonial-slider__next, .testimonial-slider__prev').click(function(e) {
		var slideWidth = $('.testimonial-slider__list').data('slide-width') + '%',
			isNext = $(this).hasClass('testimonial-slider__next'),
			$activeSlide = $('.testimonial-slider__slide.active');

		//make current slide inactive
		$activeSlide.removeClass('active');

		//get next, first, prev, or last slide, depending on what's clicked and available
		if (isNext) {
			if ( $activeSlide.next('.testimonial-slider__slide').length ) {
				$activeSlide.next('.testimonial-slider__slide').addClass('active');
			} else {
				$('.testimonial-slider__slide').first().addClass('active');
			}
		} else {
			if ( $activeSlide.prev('.testimonial-slider__slide').length ) {
				$activeSlide.prev('.testimonial-slider__slide').addClass('active');
			} else {
				$('.testimonial-slider__slide').last().addClass('active');
			}
		}

		//animate to new active slide
		var slideOffset = ($('.testimonial-slider__slide.active').data('slide-num') * -100) + 100 + '%';
		$('.testimonial-slider__list').animate({
			'left': slideOffset
		});
	});

	// --------------------------------------------------------------------------[ CONTACT FORM ]
	/*
	$('#contact-form').submit(function(e) {
	    e.preventDefault();

	    // Get the post data
	    var data = $(this).serialize();

	    // Send it to the server
	    $.post($(this).attr('action'), data, function(response) {
	        if (response.success) {
	            $('#contact-form .thanks').fadeIn();
	        } else {
	            // response.error will be an object containing any validation errors that occurred, indexed by field name
	            // e.g. response.error.fromName => ['From Name is required']
	            alert('An error occurred. Please try again.');
	            console.log(response.error);
	        }
	    });
	});
*/
	$('.modal-toggle').click(function(e) {
		e.preventDefault();
		$('#modal').toggleClass('active');

		$('.modal__content').hide();
		var target = $(this).data('modal-target');
		$('.modal__content--' + target).show();

	});
	$('#modal-overlay').click(function(e) {
		e.preventDefault();
		$('#modal').removeClass('active');
	});



}());