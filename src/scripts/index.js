import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.html';
import '../styles/index.css';
import '../styles/fonts.css';
import 'animate.css';
import menu from './modules/menu';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    menu('#open-btn', '#header-row');
    modal('.button-modal__open', '.modal-btn__close', '.modal');
});
