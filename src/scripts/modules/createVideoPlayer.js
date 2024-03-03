import calcScroll from './calcScroll';

const createVideoPlayer = (
    modalSelector,
    playBtnSelector,
    closerBntSelector,
) => {
    const modal = document.querySelector(modalSelector);
    const playBtn = document.querySelector(playBtnSelector);
    const closeBtn = document.querySelector(closerBntSelector);
    let player;

    playBtn.addEventListener('click', () => {
        const scrollWidth = calcScroll();
        document.body.style.paddingRight = `${scrollWidth}px`;
        document.body.style.overflow = 'hidden';

        if (modal.querySelector('iframe#frame')) {
            modal.style.display = 'flex';
        } else {
            modal.style.display = 'flex';
            const path = playBtn.dataset.url;
            createPlayer(path);
        }
    });

    closeBtn.addEventListener('click', () => {
        player.stopVideo();

        modal.style.display = 'none';
        document.body.style.paddingRight = '0px';
        document.body.style.overflow = 'visible';
    });

    function init() {
        const tag = document.createElement('script');

        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    function createPlayer(url) {
        player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
    }

    init();
};

export default createVideoPlayer;

// M7lc1UVf-VE
