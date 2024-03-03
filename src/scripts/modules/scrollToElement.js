const scrollToElement = (triggerSelector, elementSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const element = document.querySelector(elementSelector);

    trigger.addEventListener('click', () => {
        element.scrollIntoView();
    });
};

export default scrollToElement;
