const slider = (
    containerSelector,
    trackSelector,
    slidesSelector,
    slidesToShow = 1,
    slidesToScroll = 1,
    isAdaptive = false,
    position = 0,
) => {
    if (isAdaptive) {
        if (window.innerWidth <= 635) {
            slidesToShow = 1;
            slidesToScroll = 1;
        } else if (window.innerWidth <= 1210 && window.innerWidth > 635) {
            slidesToShow = 2;
            slidesToScroll = 2;
        }
    }

    const sliderContainer = document.querySelector(containerSelector);
    const sliderTrack = document.querySelector(trackSelector);
    const slides = document.querySelectorAll(slidesSelector);
    const prevBtn = sliderContainer.querySelector('.slider-prev__btn');
    const nextBtn = sliderContainer.querySelector('.slider-next__btn');

    const itemWidth = sliderContainer.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    const maxPosition = -(slides.length * itemWidth - slidesToShow * itemWidth);

    slides.forEach(item => (item.style.minWidth = `${itemWidth}px`));

    prevBtn.addEventListener('click', handlePrevClick);

    nextBtn.addEventListener('click', handleNextClick);

    function handlePrevClick() {
        if (position >= 0) {
            position = maxPosition;
        } else {
            position += movePosition;
        }

        setPosition();
    }

    function handleNextClick() {
        if (position <= maxPosition) {
            position = 0;
        } else {
            position -= movePosition;
        }

        setPosition();
    }

    function setPosition() {
        sliderTrack.style.transform = `translateX(${position}px)`;
    }
};

export default slider;
