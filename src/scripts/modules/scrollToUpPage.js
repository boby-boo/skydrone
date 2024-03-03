const scrollToUpPage = triggerSelector => {
    const trigger = document.querySelector(triggerSelector);
    let lastScrollTop = null;

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.scrollY;
        if (currentScrollTop < lastScrollTop && window.scrollY > 100) {
            trigger.style.display = 'block';
            trigger.addEventListener('click', scrollToElement);
        } else {
            trigger.style.display = 'none';
            trigger.classList.remove('animate__fadeOut');
        }

        lastScrollTop = currentScrollTop;
    });

    function scrollToElement() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        trigger.classList.add('animate__fadeOut');
        trigger.style.display = 'none';
    }
};

export default scrollToUpPage;
