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
			        path: "/js/menu-V2.json",//"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/menu.json"
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
						$('.modal-menu').toggleClass('active');
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
		// alert('Текущая прокрутка сверху: ' + window.pageYOffset);
		// угораем с крестика
		if($('.modal-menu').hasClass('.active')){
			window.addEventListener('scroll', function() {
			  // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
			  console.log(window.pageYOffset);
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
				var slidesTitle = $('.header-middle-line__title-text');

				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}
				for (i = 0; i < slides.length; i++) {
					$(slides[i]).removeClass('active');
				}
				for (i = 0; i < slidesTitle.length; i++) {
					$(slidesTitle[i]).removeClass('active');
				}
				// $(slides[slideIndex - 1]).fadeIn(500, 'linear').delay(3000).fadeOut(500, 'linear');
				$(slides[slideIndex - 1]).addClass('active');//css('display', 'block');
				// $(slides[slideIndex - 1]).stop().fadeTo(600, 1, 'ease').delay(2800).fadeTo(600, 0.5, 'ease'); //linear

				$(slidesTitle[slideIndex - 1]).addClass('active');
				// $(slidesTitle[slideIndex - 1]).stop().fadeTo(1200, 1, 'linear').delay(1600).fadeTo(1200, 0, 'linear');
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
			    // console.log(n);
			    showSlides(slideIndex = n);
			    clearTimeout(timerId)
		    });


			function showSlides(n) {
				var i;
				// console.log(slides.length);
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
				// $(slides[slideIndex - 1]).stop().fadeTo(800, 1, 'linear').delay(2400).fadeTo(800, 0.5, 'linear');;

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

		// map
		if($('.body-project').is('.infrastructure__map')){
			console.log('Оно есть!');
		    var map;

			DG.then(function () {
			    map = DG.map('map', {
			        center: [55.93, 49.31],
			        zoom: 14
			    });

		    	DG.marker([55.937821, 49.307848]).addTo(map).bindPopup('Экосад Hi-гора');
		    	DG.marker([55.937403, 49.306126]).addTo(map).bindPopup('Рябинушка');
		    	DG.marker([55.935393, 49.307714]).addTo(map).bindPopup('ART KIDS');
		    	DG.marker([55.929704, 49.293906]).addTo(map).bindPopup('Тургай');

		    	DG.marker([55.934179, 49.304013]).addTo(map).bindPopup('Таттехмедфарм');
		    	DG.marker([55.936553, 49.303095]).addTo(map).bindPopup('Таттехмедфарм');
		    	DG.marker([55.936682, 49.303701]).addTo(map).bindPopup('Шалфей');
		    	DG.marker([55.933488, 49.306577]).addTo(map).bindPopup('Апрель');
		    	DG.marker([55.932358, 49.30744]).addTo(map).bindPopup('Вита Экспресс');

		    	DG.marker([55.936514, 49.303787]).addTo(map).bindPopup('Минслу');
		    	DG.marker([55.935802, 49.299624]).addTo(map).bindPopup('Продуктовый магазин');
		    	DG.marker([55.933512, 49.306545]).addTo(map).bindPopup('Арыш мае');
		    	DG.marker([55.932391, 49.308771]).addTo(map).bindPopup('Звениговские колбасы');
		    	DG.marker([55.932193, 49.308197]).addTo(map).bindPopup('Техас');
		    	DG.marker([55.932045, 49.308052]).addTo(map).bindPopup('Продуктовый магазин');
		    	DG.marker([55.931931, 49.307532]).addTo(map).bindPopup('Фабрика качества');
		    	DG.marker([55.932085, 49.307306]).addTo(map).bindPopup('Пятерочка');
		    	DG.marker([55.93170, 49.305724]).addTo(map).bindPopup('Магнит');

		    	DG.marker([55.93252, 49.305686]).addTo(map).bindPopup('Cпортивный комплекс');
		    	DG.marker([55.922771, 49.304967]).addTo(map).bindPopup('Биектау');

		    	DG.marker([55.933933, 49.305654]).addTo(map).bindPopup('Сбербанк');
		    	DG.marker([55.934053, 49.303487]).addTo(map).bindPopup('АК БАРС БАНК');

			});

			// детские сады
			DG.then(function () {
			    map = DG.map('detsad', {
			        center: [55.93, 49.31],
			        zoom: 14
			    });

		    	DG.marker([55.937821, 49.307848]).addTo(map).bindPopup('Экосад Hi-гора');
		    	DG.marker([55.937403, 49.306126]).addTo(map).bindPopup('Рябинушка');
		    	DG.marker([55.935393, 49.307714]).addTo(map).bindPopup('ART KIDS');
		    	DG.marker([55.929704, 49.293906]).addTo(map).bindPopup('Тургай');

			});
			// аптеки
			DG.then(function () {
			    map = DG.map('apteki', {
			        center: [55.93, 49.31],
			        zoom: 14
			    });

		    	DG.marker([55.934179, 49.304013]).addTo(map).bindPopup('Таттехмедфарм');
		    	DG.marker([55.936553, 49.303095]).addTo(map).bindPopup('Таттехмедфарм');
		    	DG.marker([55.936682, 49.303701]).addTo(map).bindPopup('Шалфей');
		    	DG.marker([55.933488, 49.306577]).addTo(map).bindPopup('Апрель');
		    	DG.marker([55.932358, 49.30744]).addTo(map).bindPopup('Вита Экспресс');

			});
			// магазины
			DG.then(function () {
			    map = DG.map('magazin', {
			        center: [55.93, 49.31],
			        zoom: 14
			    });

		    	DG.marker([55.936514, 49.303787]).addTo(map).bindPopup('Минслу');
		    	DG.marker([55.935802, 49.299624]).addTo(map).bindPopup('Продуктовый магазин');
		    	DG.marker([55.933512, 49.306545]).addTo(map).bindPopup('Арыш мае');
		    	DG.marker([55.932391, 49.308771]).addTo(map).bindPopup('Звениговские колбасы');
		    	DG.marker([55.932193, 49.308197]).addTo(map).bindPopup('Техас');
		    	DG.marker([55.932045, 49.308052]).addTo(map).bindPopup('Продуктовый магазин');
		    	DG.marker([55.931931, 49.307532]).addTo(map).bindPopup('Фабрика качества');
		    	DG.marker([55.932085, 49.307306]).addTo(map).bindPopup('Пятерочка');
		    	DG.marker([55.93170, 49.305724]).addTo(map).bindPopup('Магнит');

			});
			// спорт
			DG.then(function () {
			    map = DG.map('sport', {
			        center: [55.93, 49.31],
			        zoom: 14
			    });

		    	DG.marker([55.93252, 49.305686]).addTo(map).bindPopup('Cпортивный комплекс');
		    	DG.marker([55.922771, 49.304967]).addTo(map).bindPopup('Биектау');

			});
			// банки
			DG.then(function () {
			    map = DG.map('banks', {
			        center: [55.93, 49.31],
			        zoom: 14
			    });

		    	DG.marker([55.933933, 49.305654]).addTo(map).bindPopup('Сбербанк');
		    	DG.marker([55.934053, 49.303487]).addTo(map).bindPopup('АК БАРС БАНК');

			});
		};

		//
		if($('.infrastructure__map')){
			$('.infrastructure__button').on('click', function(){
				for(var i = 0; i < $('.infrastructure__button').length; i++){
					$($('.infrastructure__button')[i]).removeClass('active');
				};
				$(this).addClass('active');
				var count = 0;
				for(var i = 0; i < $('.infrastructure__button').length; i++){
					if($($('.infrastructure__button')[i]).hasClass('active')){
						count = i;
					};
				};
				console.log(count);
				for(var j = 0; j < $('.infrastructure__map-container').length; j++){
					// if(j == i){
					// 	$($('.infrastructure__map-container')[j]).addClass('active');
					// 	console.log('надо добавить');
					// } else {
					// $($('.infrastructure__map-container')[j]).removeClass('active');
					// };
					// console.log('надо убрать');

					$($('.infrastructure__map-container')[j]).removeClass('active');
				};
				for(var j = 0; j < $('.infrastructure__map-container').length; j++){
					if(j == count){
						$($('.infrastructure__map-container')[j]).addClass('active');
					};
				};

			});
		};


	    if (window.matchMedia('(max-width: 577px)').matches){

			// новостной слайдер
			function secondSlaiderForNews() {

				// var delay = 4000;
				// var timerId = setInterval(function currentSlide() {
				// 	showSlides(slideIndex += 1);
				// }, delay);

				var slideIndex = 1;
				
				var slides = $('.second-tab .attention-details__block-wrap');
				var controlDotsItems = $('.second-tab .attention-details__tab-button');

				showSlides(slideIndex);

				// $('.note-control__right').on('click', function nextSlide() {
				// 	showSlides(slideIndex += 1);
				// });

				// $('.note-control__left').on('click', function previousSlide() {
				// 	showSlides(slideIndex -= 1);
				// });

				controlDotsItems.on('click', function currentSlide(n) {
				    var n = $(this).index() + 1;
				    console.log(n);
				    showSlides(slideIndex = n);
				    // clearTimeout(timerId)
			    });

				function showSlides(n) {
					var i = 0;
					// console.log(slides.length);
					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
					for (i = 0; i < slides.length; i++) {
						$(slides[i]).removeClass('active');
						console.log('!');
					};
					for (i = 0; i < controlDotsItems.length; i++) {
						//dots[i].className = dots[i].className.replace("active", "");
						$(controlDotsItems[i]).removeClass('active');
					};

					$(slides[slideIndex - 1]).addClass('active');
					// console.log('?');
					$(controlDotsItems[slideIndex - 1]).addClass('active');
					// console.log($(slides[slideIndex - 1]));
				};
			};
			var startSecondSlaiderForNews = secondSlaiderForNews();
			//
			function firstSlaiderForNews() {

				// var delay = 4000;
				// var timerId = setInterval(function currentSlide() {
				// 	showSlides(slideIndex += 1);
				// }, delay);

				var slideIndex = 1;
				
				var slides = $('.first-tab .attention-details__block-wrap');
				var controlDotsItems = $('.first-tab .attention-details__tab-button');

				showSlides(slideIndex);

				// $('.note-control__right').on('click', function nextSlide() {
				// 	showSlides(slideIndex += 1);
				// });

				// $('.note-control__left').on('click', function previousSlide() {
				// 	showSlides(slideIndex -= 1);
				// });

				controlDotsItems.on('click', function currentSlide(n) {
				    var n = $(this).index() + 1;
				    console.log(n);
				    showSlides(slideIndex = n);
				    // clearTimeout(timerId)
			    });

				function showSlides(n) {
					var i = 0;
					// console.log(slides.length);
					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
					for (i = 0; i < slides.length; i++) {
						$(slides[i]).removeClass('active');
					};
					for (i = 0; i < controlDotsItems.length; i++) {
						//dots[i].className = dots[i].className.replace("active", "");
						$(controlDotsItems[i]).removeClass('active');
					};

					$(slides[slideIndex - 1]).addClass('active');
					$(controlDotsItems[slideIndex - 1]).addClass('active');
				};
			};
			var startFirstSlaiderForNews = firstSlaiderForNews();
			//
			function fineFinishSlaider() {

				// var delay = 4000;
				// var timerId = setInterval(function currentSlide() {
				// 	showSlides(slideIndex += 1);
				// }, delay);

				var slideIndex = 1;
				
				var slides = $('.fine-finish__info-wrap');
				var controlDotsItems = $('.fine-finish__slide-buttoms');

				showSlides(slideIndex);

				controlDotsItems.on('click', function currentSlide(n) {
				    var n = $(this).index() + 1;
				    console.log(n);
				    showSlides(slideIndex = n);
				    // clearTimeout(timerId)
			    });

				function showSlides(n) {
					var i = 0;
					// console.log(slides.length);
					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
					for (i = 0; i < slides.length; i++) {
						$(slides[i]).removeClass('active');
						console.log('!');
					};
					for (i = 0; i < controlDotsItems.length; i++) {
						$(controlDotsItems[i]).removeClass('active');
					};

					$(slides[slideIndex - 1]).addClass('active');
					$(controlDotsItems[slideIndex - 1]).addClass('active');
				};
			};
			var startFineFinishSlaider = fineFinishSlaider();
			//
			function projectNewsSlaider() {

				// var delay = 4000;
				// var timerId = setInterval(function currentSlide() {
				// 	showSlides(slideIndex += 1);
				// }, delay);

				var slideIndex = 1;
				
				var slides = $('.project-news__news-item');
				var controlDotsItems = $('.project-news__slaider-button');

				showSlides(slideIndex);

				$('.project-news__slaider-arrow.slaider-arrow__right').on('click', function nextSlide() {
					showSlides(slideIndex += 1);
				});

				$('.project-news__slaider-arrow.slaider-arrow__left').on('click', function previousSlide() {
					showSlides(slideIndex -= 1);
				});

				controlDotsItems.on('click', function currentSlide(n) {
				    var n = $(this).index() + 1;
				    console.log(n);
				    showSlides(slideIndex = n);
				    // clearTimeout(timerId)
			    });

				function showSlides(n) {
					var i = 0;
					// console.log(slides.length);
					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
					for (i = 0; i < slides.length; i++) {
						$(slides[i]).removeClass('active');
					};
					for (i = 0; i < controlDotsItems.length; i++) {
						//dots[i].className = dots[i].className.replace("active", "");
						$(controlDotsItems[i]).removeClass('active');
					};

					$(slides[slideIndex - 1]).addClass('active');
					$(controlDotsItems[slideIndex - 1]).addClass('active');
				};
			};
			var startProjectNewsSlaider = projectNewsSlaider();
			//
			function сonstructionProgressSlaider() {

				// var delay = 4000;
				// var timerId = setInterval(function currentSlide() {
				// 	showSlides(slideIndex += 1);
				// }, delay);

				var slideIndex = 1;
				
				var slides = $('.construction-progress__slade');
				var elem = $('.construction-progress__control-bottons');
				var elemHtmlVal = '<div class="construction-progress__control-botton active"></div>';
				for(var i = 0; i < slides.length - 1; i++){
					elemHtmlVal = elemHtmlVal + '<div class="construction-progress__control-botton"></div>';
					
				};
				elem.html(elemHtmlVal);
				var controlDotsItems = $('.construction-progress__control-botton');

				showSlides(slideIndex);

				$('.note-control__right').on('click', function nextSlide() {
					showSlides(slideIndex += 1);
				});

				$('.note-control__left').on('click', function previousSlide() {
					showSlides(slideIndex -= 1);
				});

				controlDotsItems.on('click', function currentSlide(n) {
				    var n = $(this).index() + 1;
				    console.log(n);
				    showSlides(slideIndex = n);
				    // clearTimeout(timerId)
			    });

				function showSlides(n) {
					var i = 0;
					// console.log(slides.length);
					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
					for (i = 0; i < slides.length; i++) {
						$(slides[i]).removeClass('active');
					};
					for (i = 0; i < controlDotsItems.length; i++) {
						//dots[i].className = dots[i].className.replace("active", "");
						$(controlDotsItems[i]).removeClass('active');
					};

					$(slides[slideIndex - 1]).addClass('active');
					$(controlDotsItems[slideIndex - 1]).addClass('active');
				};
			};
			var startConstructionProgressSlaider = сonstructionProgressSlaider();

			// омг, свайп
			// if($('.attention-details__block-wrap')){
				// $('.attention-details__tab.second-tab').swipe( {
				//     swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection){
				//         // if (phase=="start"){
				//         //     // сработает в начале swipe
				//         // } 
				//         console.log('вкл');
				//         if (phase=="end"){ 
				//             //сработает через 20 пикселей то число которое выбрали в threshold
				//             if (direction == 'left') {
				//                 //сработает при движении влево
				//                 console.log('лево');
				//             }
				//             if (direction == 'right') {
				//                 //сработает при движении вправо
				//                 console.log('право');
				//             }
				//             // if (direction == 'up') {
				//             //     //сработает при движении вверх
				//             // }
				//             // if (direction == 'down') {
				//             //     //сработает при движении вниз
				//             // }
			 //            }
			 // 		},
				// 	triggerOnTouchEnd:false,
				// 	threshold:20 // сработает через 20 пикселей

		  //   	} );

			// };

			//
			function banksSlaider() {

				// var delay = 4000;
				// var timerId = setInterval(function currentSlide() {
				// 	showSlides(slideIndex += 1);
				// }, delay);

				var slideIndex = 1;
				
				var slides = $('.about-banks__item');

				showSlides(slideIndex);

				$('.about-banks__control-arrow.control-arrow_left').on('click', function nextSlide() {
					showSlides(slideIndex += 1);
				});

				$('.about-banks__control-arrow.control-arrow_right').on('click', function previousSlide() {
					showSlides(slideIndex -= 1);
				});

				function showSlides(n) {
					var i = 0;
					// console.log(slides.length);
					if (n > slides.length) {
						slideIndex = 1;
					};
					if (n < 1) {
						slideIndex = slides.length;
					};
					for (i = 0; i < slides.length; i++) {
						$(slides[i]).removeClass('active');
					};
					$(slides[slideIndex - 1]).addClass('active');

				};
			};
			var startBanksSlaider = banksSlaider();

	  	};
	});
});