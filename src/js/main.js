$(function () {
	function carousel(selector) {
			var acarousel = $(selector).acarousel({
				moveAfter:function () {
					var position = acarousel.getPos(0).index + 1;
					$(".current__slide").text("0" + position);
				}
			});

			$(selector).swipe({
				swipeStatus: function (event, phase, direction) {
					if (phase == "end") {
						//сработает через 20 пикселей то число которое выбрали в threshold
						if (direction == 'left') {
							//сработает при движении влево
							var move = acarousel.move(-1)
							// changeActive(move);
						}
						if (direction == 'right') {
							//сработает при движении вправо
							var move = acarousel.move(1);
							// changeActive(move);
						}
					}
				},
				triggerOnTouchEnd: false,
				threshold: 20,
			});

			$(".move__back").click(function () {
				if (acarousel.isAnim()) return false; 
				var move = acarousel.move(1);
				return false;
			  });
			  
			  $(".move__next").click(function () {
				if (acarousel.isAnim()) return false; 
				var move = acarousel.move(-1);
				return false;
			  });

			$(window).resize(function () {
				acarousel.init();
			});
	}

	carousel(".slider__wrapper");
})
