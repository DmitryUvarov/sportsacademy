/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper123')) {
		// Створюємо слайдер
		new Swiper('.swiper123', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}


	// slider-text
if (document.querySelector('.slider-text')) {
		// Створюємо слайдер
		new Swiper('.slider-text', {
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 40,
			speed: 8000,
			loop: true,
			allowTouchMove: false,

			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
		});
	}


	// slider-management
	if (document.querySelector('.slider-management')) {
		// Створюємо слайдер
		new Swiper('.slider-management', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 800,

			navigation: {
				prevEl: '.management-navigation .button-prev',
				nextEl: '.management-navigation .button-next',
			},

			breakpoints: {
				375: {
					slidesPerView: 1.3,
					spaceBetween: 20,
				},
				540: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2.6,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
			},
		});
	}


	// mediaphoto__slider
	if (document.querySelector('.mediaphoto__slider')) {
		// Створюємо слайдер
		new Swiper('.mediaphoto__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 800,

			navigation: {
				prevEl: '.mediaphoto-navigation .button-prev',
				nextEl: '.mediaphoto-navigation .button-next',
			},

			breakpoints: {
				375: {
					slidesPerView: 1.1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 1.16,
					spaceBetween: 30,
				},
				991: {
					slidesPerView: 1.18,
					spaceBetween: 60,
				},
			},
		});
	}


}


// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});