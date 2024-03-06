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
import createDecorCircle from './modules/createDecorCircle';
import selectionOfProduct from './modules/selectionOfProduct';
import createVideoPlayer from './modules/createVideoPlayer';
import scrollToElement from './modules/scrollToElement';
import scrollToUpPage from './modules/scrollToUpPage';
import validateForm from './modules/validateForm';
import mask from './modules/mask';
import submitForm from './modules/submitForm';

window.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    selectionOfProduct('.products-list', '.products-main');
    slider(
        '.products-slider',
        '.products-list',
        '.products-list__item',
        3,
        1,
        true,
    );
    menu('#open-btn', '#header-row');
    modal('.button-modal__open', '.modal-btn__close', '.modal');
    slider(
        '.testimonial-slider',
        '.testimonial-row',
        '.testimonial-card',
        3,
        3,
        true,
    );
    slider('.gallery-slider', '.gallery-slider__row', '.gallery-card');
    createDecorCircle('.modern-card__decor');
    createVideoPlayer('.modal-video', '.play', '.modal-video__close');
    scrollToElement('#scroll-down', '#products');
    scrollToUpPage('.button-scroll__main', '#header');
    mask('.modal-row input[type="tel"]');
    validateForm(
        '.modal-row .modal-input',
        '.modal-btn__close',
        '.modal-button',
    );
    submitForm('#form');
});
