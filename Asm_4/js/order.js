document.getElementById('formSubmit').addEventListener('click', (event) => {
    if (!submitForm()){
        event.preventDefault();
    }
})

for (let i = 0; i < document.getElementsByClassName('form-control').length; i++) {
    document.getElementsByClassName('form-control')[i].addEventListener('change', (event) => {
            submitForm();
        }
    )
}


function submitForm() {
    //DOM selector init
    const cakeInput = document.getElementById('cakeInput');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const dateInput = document.getElementById('dateInput');
    const addressInput = document.getElementById('addressInput');

    const validateCake = document.getElementById('validateCake');
    const validateName = document.getElementById('validateName');
    const validateMessage = document.getElementById('validateMessage');
    const validateDate = document.getElementById('validateDate');
    const validateAddress = document.getElementById('validateAddress');

    //Validate init
    const BLANK = 0;
    const selectCake = 'select';
    const maxName = 100;
    const maxMessage = 30;
    const maxAddress = 500;

    let returnValue = true;

    //  Cake input
    cakeInput.classList.remove('is-invalid');
    cakeInput.classList.remove('is-valid');

    if (cakeInput.value === selectCake) {
        validateCake.innerText = "Please select a cake.";
        cakeInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateCake.innerText = "";
        cakeInput.classList.add('is-valid');
    }

    //  Name input
    nameInput.classList.remove('is-invalid');
    nameInput.classList.remove('is-valid');

    if (nameInput.value.length === BLANK) {
        validateName.innerText = "Please fill out your name.";
        nameInput.classList.add('is-invalid');
        returnValue = false;
    } else if (nameInput.value.length > maxName) {
        validateName.innerText = "Your name should not exceed 100 characters."
        nameInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateName.innerText = "";
        nameInput.classList.add('is-valid');
    }

    //  Message input
    if (messageInput.value.length > maxMessage) {
        validateMessage.innerText = "Your message should not exceed 30 characters.";
        messageInput.classList.add('is-invalid');
        returnValue = false;
    }

    //  Date input
    dateInput.classList.remove('is-invalid');
    dateInput.classList.remove('is-valid');
    const currentDate = new Date();
    const inputDate = new Date(dateInput.value);
    if (dateInput.value.length === BLANK) {
        validateDate.innerText = "Please fill out the date.";
        dateInput.classList.add('is-invalid');
        returnValue = false;
    } else if (inputDate < currentDate) {
        validateDate.innerText = "Please select a date in the future.";
        dateInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateDate.innerText = "";
        dateInput.classList.add('is-valid');
    }

    //  Subject input
    addressInput.classList.remove('is-invalid');
    addressInput.classList.remove('is-valid');
    if (addressInput.value.length === BLANK) {
        validateAddress.innerText = "Please fill out the address.";
        addressInput.classList.add('is-invalid');
        returnValue = false;
    } else if (addressInput.value.length > maxAddress) {
        validateAddress.innerText = "Your address should not exceed 500 characters.";
        addressInput.classList.add('is-invalid');
        returnValue = false;
    } else {
        validateAddress.innerText = "";
        addressInput.classList.add('is-valid');
    }

    return returnValue;
}