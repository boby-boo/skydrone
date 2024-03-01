import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.html';
import '../styles/index.css';
import '../styles/fonts.css';
import 'animate.css';
import menu from './modules/menu';
import modal from './modules/modal';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    menu('#open-btn', '#header-row');
    modal('.button-modal__open', '.modal-btn__close', '.modal');
    slider(
        '.testimonial-slider',
        '.testimonial-row',
        '.testimonial-card',
        '.slider-prev__btn',
        '.slider-next__btn',
        3,
        3,
        true,
    );
    slider(
        '.gallery-slider',
        '.gallery-slider__row',
        '.gallery-card',
        '.gallery-slider__prev-btn',
        '.gallery-slider-next__btn',
    );
});
