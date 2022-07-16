document.getElementById('formSubmit').addEventListener('click', (event) => {
    if (!submitForm()){
        event.preventDefault();
    }
})

/* vaildate form on change */
for (let i = 0; i < document.getElementsByClassName('form-control').length; i++) {
    document.getElementsByClassName('form-control')[i].addEventListener('change', (event) => {
        submitForm();
    }
    )
}

function submitForm() {
    //DOM selector init
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const subjectInput = document.getElementById('subjectInput');
    const messageInput = document.getElementById('messageInput');

    const vaildateName = document.getElementById('validateName');
    const validateEmail = document.getElementById('validateEmail');
    const validateSubject = document.getElementById('validateSubject');
    const validateMessage = document.getElementById('validateMessage');

    //Validate init
    const BLANK = 0;
    const maxName = 100;
    const maxEmail = 100;
    const minSubject = 50;
    const maxSubject = 250;
    const maxMessage = 500;

    let returnValue = true;

    //  Name input
    nameInput.classList.remove('is-invalid');
    nameInput.classList.remove('is-valid');

    if (nameInput.value.length === BLANK) {
        vaildateName.innerText = "Please fill out your name.";
        nameInput.classList.add('is-invalid');
        returnValue = false;
    } else if (nameInput.value.length > maxName) {
        vaildateName.innerText = "Your name should not exceed 100 characters."
        nameInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        vaildateName.innerText = "";
        nameInput.classList.add('is-valid');
    }

    //  Email input
    emailInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-valid');

    if (emailInput.value.length === BLANK) {
        validateEmail.innerText = "Please fill out your email.";
        emailInput.classList.add('is-invalid');
        returnValue = false;
    } else if (emailInput.value.length > maxEmail) {
        validateEmail.innerText = "Your email should not exceed 100 characters.";
        emailInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateEmail.innerText = "";
        emailInput.classList.add('is-valid');
    }

    //  Subject input
    subjectInput.classList.remove('is-invalid');
    subjectInput.classList.remove('is-valid');

    if (subjectInput.value.length === BLANK) {
        validateSubject.innerText = "Please fill out the subject.";
        subjectInput.classList.add('is-invalid');
        returnValue = false;
    } else if (subjectInput.value.length < minSubject) {
        validateSubject.innerText = "Subject should be at least 50 characters.";
        subjectInput.classList.add('is-invalid');
        returnValue = false;
    } else if (subjectInput.value.length > maxSubject) {
        validateSubject.innerText = "Subject should not exceed 250 characters.";
        subjectInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateSubject.innerText = "";
        subjectInput.classList.add('is-valid');
    }

    //  Message input
    messageInput.classList.remove('is-invalid');
    messageInput.classList.remove('is-valid');

    if (messageInput.value.length === BLANK) {
        validateMessage.innerText = "Please fill out the message.";
        messageInput.classList.add('is-invalid');
        returnValue = false;
    } else if (messageInput.value.length > maxMessage) {
        validateMessage.innerText = "Message should not exceed 500 characters.";
        messageInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateMessage.innerText = "";
        messageInput.classList.add('is-valid');
    }
    return returnValue;
}