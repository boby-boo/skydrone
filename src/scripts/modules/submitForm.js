const submitForm = formSelector => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            postData(formData);
        });
    });

    const postData = async data => {
        const res = await fetch('assets/server.php', {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };
};

export default submitForm;
