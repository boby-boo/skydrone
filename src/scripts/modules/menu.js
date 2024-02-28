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

    function calcScroll() {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function addMarginToTrigger() {
        const scrollWidth = calcScroll();

        if (container.closest('.open')) {
            document.body.style.overflow = 'hidden';
            trigger.style.marginRight = `${scrollWidth}px`;
        } else {
            document.body.style.overflow = 'visible';
            trigger.style.marginRight = '0px';
        }
    }
};

export default menu;
