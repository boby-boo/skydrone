import calcScroll from './calcScroll';

const modal = (
    triggerToOpenSelector,
    triggerToCloseSelector,
    modalSelector,
) => {
    const btnsForOpen = document.querySelectorAll(triggerToOpenSelector);
    const btnForClose = document.querySelector(triggerToCloseSelector);
    const modal = document.querySelector(modalSelector);
    const modalWindow = modal.firstElementChild;

    btnsForOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            const scrollWidth = calcScroll();
            document.body.style.paddingRight = `${scrollWidth}px`;
            document.body.style.overflow = 'hidden';

            modalWindow.classList.remove('animate__zoomOut');
            modal.classList.remove('animate__fadeOut');
            modalWindow.classList.add('animate__zoomIn');

            modal.style.display = 'flex';
        });
    });

    btnForClose.addEventListener('click', () => {
        document.body.style.paddingRight = '0px';
        document.body.style.overflow = 'visible';

        modalWindow.classList.add('animate__zoomOut');
        modalWindow.classList.remove('animate__zoomIn');
        modal.classList.add('animate__fadeOut');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
};

export default modal;
