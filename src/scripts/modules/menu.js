import calcScroll from './calcScroll';

const menu = (triggerSelector, containerSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const iconsButton = Array.from(trigger.children);
    const container = document.querySelector(containerSelector);

    trigger.addEventListener('click', () => {
        toggleDisplayState();
        addMarginToTrigger();
    });

    container.addEventListener('click', e => {
        if (e.target.tagName == 'A') {
            toggleDisplayState();
            addMarginToTrigger();
        }
    });

    function toggleDisplayState() {
        iconsButton.forEach(btn => {
            btn.classList.toggle('none');
        });

        container.classList.toggle('open');
    }

    function addMarginToTrigger() {
        const scrollWidth = calcScroll();
        const windowWidth = window.innerWidth <= 568;

        if (windowWidth) {
            if (container.closest('.open')) {
                document.body.style.overflow = 'hidden';
                trigger.style.marginRight = `${scrollWidth}px`;
            } else {
                document.body.style.overflow = 'visible';
                trigger.style.marginRight = '0px';
            }
        }
    }
};

export default menu;
