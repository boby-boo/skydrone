import { v4 as uuidv4 } from 'uuid';

const submitForm = (formSelector, submitTitleSelector) => {
    const forms = document.querySelectorAll(formSelector);
    const titleSubmit = document.querySelector(submitTitleSelector);

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            data.id = uuidv4();

            postData(JSON.stringify(data)).then(res => console.log(res));
            animateSubmitTitle();
            form.reset();
        });
    });

    function animateSubmitTitle() {
        titleSubmit.classList.remove('none');
        titleSubmit.classList.remove('animate__fadeOut');
        titleSubmit.classList.add('animate__fadeIn');

        form.parentNode.style.display = 'none';

        setTimeout(() => {
            titleSubmit.classList.add('animate__fadeOut');
            titleSubmit.classList.add('none');
            titleSubmit.classList.remove('animate__fadeIn');

            form.parentNode.style.display = 'none';
            form.parentNode.querySelector('.modal-btn__close').click();
        }, 2000);
    }

    async function postData(data) {
        try {
            const res = await fetch(
                'https://skydrone-db.vercel.app/callbacks/',
                {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
            }

            const responseData = await res.json();

            return responseData;
        } catch (error) {
            console.log(`Error ${error}`);
            return error;
        }
    }
};

export default submitForm;
