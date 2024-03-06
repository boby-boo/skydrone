const validateForm = (
    inputInnerSelector,
    closeModalSelector,
    submitButtonSelector,
) => {
    const innersInput = document.querySelectorAll(inputInnerSelector);
    const closModalBtn = document.querySelector(closeModalSelector);
    const modalButton = document.querySelector(submitButtonSelector);

    const isValidStatus = {
        textInput: false,
        emailInput: false,
        telInput: false,
    };

    const errorMessage = {
        inputLengthShort: 'Name is too short',
        inputLengthLong: 'Name is too long',
        inputEmail: 'Example email: test@gmail.com',
    };

    updateButtonState();

    innersInput.forEach(inputInner => {
        const input = inputInner.querySelector('input');
        const errorContainer = inputInner.querySelector('span');

        validate(input, errorContainer, 'input');
    });

    closModalBtn.addEventListener('click', clearInputBeforeClosing);

    function validate(inputElement, errorContainer, eventTrigger) {
        inputElement.addEventListener(eventTrigger, e => {
            const { type, value } = e.target;

            switch (type) {
                case 'email':
                    validateEmailInput(value, errorContainer);
                    break;
                case 'text':
                    e.target.value = validateTextInput(value, errorContainer);
                    break;
                case 'tel':
                    validateTelInput(value);
                    break;
                default:
                    return;
            }
        });
    }

    function validateTextInput(value, errorContainer) {
        if (value.length < 2) {
            errorContainer.textContent = errorMessage.inputLengthShort;
            isValidStatus.textInput = false;

            toggleAnimate(errorContainer);
        } else if (value.length > 20) {
            errorContainer.textContent = errorMessage.inputLengthLong;
            toggleAnimate(errorContainer);
            isValidStatus.textInput = false;
        } else {
            isValidStatus.textInput = true;

            toggleAnimate(errorContainer, false);
        }

        updateButtonState();

        return value.replace(/[^a-zA-Z\-А-Яа-яІіЇїЄєҐґ]/g, '');
    }

    function validateEmailInput(value, errorContainer) {
        const isValid = value.match(
            /^([a-z\d\.\-]+)@([a-z\d\-]+)(\.[a-z]{2,5})(\.[a-z]{2,5})?$/,
        );

        if (isValid) {
            isValidStatus.emailInput = true;

            toggleAnimate(errorContainer, false);
        } else {
            errorContainer.textContent = errorMessage.inputEmail;
            isValidStatus.emailInput = false;

            toggleAnimate(errorContainer);
        }

        updateButtonState();
    }

    function validateTelInput(value) {
        const updateValue = value.replace(/[^\d]/g, '').substring(0, 10);
        isValidStatus.telInput = updateValue.length === 10;

        updateButtonState();
    }

    function clearInputBeforeClosing() {
        innersInput.forEach(input => {
            input.querySelector('input').value = '';
            input.querySelector('span').classList.add('none');
        });

        for (let prop in isValidStatus) {
            isValidStatus[prop] = false;
        }

        updateButtonState();
    }

    function updateButtonState() {
        const { textInput, emailInput, telInput } = isValidStatus;
        modalButton.disabled = !(textInput && emailInput && telInput);
    }

    function toggleAnimate(errorContainer, isVisible = true) {
        errorContainer.classList.remove('animate__fadeIn');
        errorContainer.classList.remove('animate__fadeOut');

        if (isVisible) {
            errorContainer.classList.remove('none');
            errorContainer.classList.add('animate__animated');
            errorContainer.classList.add('animate__fadeIn');
        } else {
            errorContainer.classList.remove('animate__fadeIn');
            errorContainer.classList.add('animate__fadeOut');
            setTimeout(() => {
                errorContainer.classList.add('none');
            }, 300);
        }
    }
};

export default validateForm;
