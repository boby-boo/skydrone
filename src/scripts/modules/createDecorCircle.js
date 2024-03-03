const createDecorCircle = containerSelector => {
    const containersForCircles = document.querySelectorAll(containerSelector);

    containersForCircles.forEach((container, index) => {
        for (let i = 0; i !== index + 1; i++) {
            const span = document.createElement('span');
            container.appendChild(span);
        }
    });
};

export default createDecorCircle;
