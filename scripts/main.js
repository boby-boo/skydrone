AOS.init();

const openBtn = document.querySelector('#open-btn');
const btnImg = document.querySelector('.open_btn__img');
const headerRow = document.querySelector('#header-row');

openBtn.addEventListener('click', () => {
    if (headerRow.closest('.open')) {
        btnImg.src = 'src/header/open_btn.svg';
        headerRow.classList.remove('open');
    } else {
        headerRow.classList.add('open');
        btnImg.src = 'src/header/close_btn.svg';
    }
})

headerRow.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        document.querySelector('.header-row').classList.remove('open');
        btnImg.src = 'src/header/open_btn.svg';
    }
})
