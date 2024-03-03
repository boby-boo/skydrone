const selectionOfProduct = (containerSelector, productsSelector) => {
    const container = document.querySelector(containerSelector);
    const products = document.querySelectorAll(productsSelector);
    const triggers = Array.from(
        container.querySelectorAll('.products-list__item'),
    );

    container.addEventListener('click', event => {
        const target = event.target;
        const currentTrigger = target.closest('.products-list__item');

        if (currentTrigger) {
            changeSlideToCurrent(+currentTrigger.dataset.order);
        }
    });

    function changeSlideToCurrent(currentIndex) {
        products.forEach((product, index) => {
            product.classList.add('none');
            triggers[index].classList.remove('active-item');
            if (currentIndex === index + 1) {
                product.classList.remove('none');

                product.classList.add('animate__animated');
                product.classList.add('animate__fadeIn');
                triggers[index].classList.add('active-item');
            }
        });
    }
};

export default selectionOfProduct;
