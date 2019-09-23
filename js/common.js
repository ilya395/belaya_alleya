$(window).on('load', function() {
	$('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');

	$(document).ready(function() {

		// рисуем меню
		let iconMenu = document.querySelector('.bodymovinanim');

			let animationMenu = bodymovin.loadAnimation({
			        container: iconMenu,
			        renderer: 'svg',
			        loop: false,
			        autoplay: false,
			        path: "../menu-v2.json",//"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/menu.json"
			        rendererSettings: {
			        	className: 'header-menu__icon-image'
			        }
			});

		var directionMenu = 1;
		  iconMenu.addEventListener('click', (e) => {
		  animationMenu.setDirection(directionMenu);
		  animationMenu.play();
		  directionMenu = -directionMenu;
		});

		// анимируем меню
		if($('#mainMenu')){
			$('#mainMenu').on('click', function(){
				// $('#mainMenu').
				$('.modal-menu').slideToggle({
					duration: 800,
					easing: "linear",
					complete: function(){
						if($('#mainMenu').hasClass('active')){
							$('#mainMenu').removeClass('active');
						} else{
							$('#mainMenu').addClass('active');
						};
					},
					queue: false
				});
			});
		};

		// верхний слайдер
		function upperSlaider() {
			var slideIndex = 1;
			showSlides(slideIndex);

			var timerId = setInterval(function nextSlide() {
				showSlides(slideIndex += 1);
			}, 4000);

			function showSlides(n) {
				var i;
				var slides = $('.upper-slaider__slaide'); //document.getElementsByClassName("block-view");
				//controlDotsItems; //var dots = document.getElementsByClassName("control-dots__item");

				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}
				for (i = 0; i < slides.length; i++) {
				
					$(slides[i]).removeClass('active');//css('display', 'none');
				}
				$(slides[slideIndex - 1]).addClass('animated fadeIn slow')
				$(slides[slideIndex - 1]).addClass('active');//css('display', 'block');
				
			};
		};

		var startUpperSlaider = upperSlaider();

		// средний слайдер
		function middleSlaider() {

			var delay = 4000;
			var timerId = setInterval(function autoNextSlide() {
				showSlides(slideIndex += 1);
			}, delay);

			var slideIndex = 1;
			
			var slides = $('.about-complex-slaider__slaide');
			var controlDotsItems = $('.about-complex-slaider__control-buttom');
			var slidesInfo = $('.about-complex-slaider__description-slaide');

			showSlides(slideIndex);

			$('.about-complex-slaider__arrow-right').on('click', function nextSlide() {
				showSlides(slideIndex += 1);
				clearTimeout(timerId)
			});

			$('.about-complex-slaider__arrow-left').on('click', function previousSlide() {
				showSlides(slideIndex -= 1);
				clearTimeout(timerId)
			});

			controlDotsItems.on('click', function currentSlide(n) {
			    var n = $(this).index() + 1;
			    console.log(n);
			    showSlides(slideIndex = n);
			    clearTimeout(timerId)
		    });


			function showSlides(n) {
				var i;
				console.log(slides.length);
				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}
				for (i = 0; i < slides.length; i++) {
					$(slides[i]).removeClass('active');
				}
				for (i = 0; i < controlDotsItems.length; i++) {
					//dots[i].className = dots[i].className.replace("active", "");
					$(controlDotsItems[i]).removeClass('active');
				}
				for (i = 0; i < slidesInfo.length; i++) {
					$(slidesInfo[i]).removeClass('action');
				}
				$(slides[slideIndex - 1]).addClass('active');
				$(controlDotsItems[slideIndex - 1]).addClass('active');
				$(slidesInfo[slideIndex - 1]).addClass('action');
			};
		};
		var startMiddleSlaider = middleSlaider();

		//табы
		var controlTabs = $('.attention-details__control-tab');
		controlTabs.on('click', function(){
			$(this).addClass('active');
			controlTabs.not(this).removeClass('active');

			if( $('.attention-details__control-tab.control-tab_right').hasClass('active') ){
				$('.attention-details__tab.second-tab').addClass('active');
				$('.attention-details__tab.first-tab').removeClass('active');
			};
			if( $('.attention-details__control-tab.control-tab_left').hasClass('active') ){
				$('.attention-details__tab.first-tab').addClass('active');
				$('.attention-details__tab.second-tab').removeClass('active');
			};
		});
		var otherControlTabs = $('.general-plan__control-tab');
		otherControlTabs.on('click', function(){
			$(this).addClass('active');
			otherControlTabs.not(this).removeClass('active');

			if( $('.general-plan__control-tab.control-tab_right').hasClass('active') ){
				$('.general-plan__slaide.general-plan__all-houses').addClass('active');
				$('.general-plan__slaide.general-plan__first-stage').removeClass('active');
			};
			if( $('.general-plan__control-tab.control-tab_left').hasClass('active') ){
				$('.general-plan__slaide.general-plan__first-stage').addClass('active');
				$('.general-plan__slaide.general-plan__all-houses').removeClass('active');
			};
		});

		// ход строительства
		if($('.construction-progress__selectric')){
			$('.construction-progress__selectric').on('click', function(){
				$('.construction-progress__select-list').toggleClass('selectric-items');

				$('.select-bar__item').on('click', function(){
					var listItemValue =  $(this).html();
					$('.construction-progress__selectric').html('<span class="selectric__label">' + listItemValue + '</span><span class="selectric-arrow">&#10148;</span>');
					if($('.construction-progress__select-list').hasClass('selectric-items')){
						$('.construction-progress__select-list').removeClass('selectric-items');
					};
				});
			});
		};

		function lowerSlaider(){
			var slideIndex = 1;
			showSlides(slideIndex);

			$('.note-control__right').on('click', function nextSlide() {
				showSlides(slideIndex += 1);
			});

			$('.note-control__left').on('click', function previousSlide() {
				showSlides(slideIndex -= 1);
			});

			function showSlides(n) {
				var i;
				var slides = $('.construction-progress__slade'); //document.getElementsByClassName("block-view");
				//controlDotsItems; //var dots = document.getElementsByClassName("control-dots__item");

				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}
				for (i = 0; i < slides.length; i++) {
					$(slides[i]).removeClass('active');
				}
				$(slides[slideIndex - 1]).addClass('active');
			};
		};

		var startLowerSlaider = lowerSlaider();

		// owl carousel
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			responsive:{
				0:{
				    items:1
				},
				600:{
				    items:2
				},
				1000:{
				    items:2
				}
			}
		});

	});
});