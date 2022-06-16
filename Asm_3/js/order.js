document.getElementById('formSubmit').addEventListener('click', (event) => {
    event.preventDefault();
    submit();
})


const submit = () => {
    //DOM selector init
    const cakeContent = document.getElementById('cakeInput').value;
    const nameContent = document.getElementById('nameInput').value;
    const messageContent = document.getElementById('messageInput').value;
    const dateContent = document.getElementById('dateInput').value;
    const addressInput = document.getElementById('addressInput').value;
    const errorElement = document.getElementById('error');

    //Validate init
    const BLANK = 0;
    const selectCake = 'select';
    const maxName = 100;
    const maxMessage = 30;
    const maxAddress = 500;

    //Validate form
    let errorMessages = "";

    //  Cake input
    if (cakeContent === selectCake) errorMessages += "Please select our product.\n";

    //  Name input
    if (nameContent.length === BLANK) errorMessages += "Please fill out your name.\n";
    else if (nameContent.length > maxName) errorMessages += "Your name should not exceed 100 characters.\n";

    //  Message input
    if (messageContent.length > maxMessage) errorMessages += "Message should not exceed 30 characters. \n";

    //  Date input
    const currentdate = new Date();
    const inputdate = new Date(dateContent)
    if (dateContent.length === BLANK) errorMessages += "Please fill out the deliver date.\n";
    else if (inputdate < currentdate) errorMessages += "Your deliver date format is not valid\n";

    //  Subject input
    if (addressInput.length === BLANK) errorMessages += "Please fill out the address.\n";
    else if (addressInput.length > maxAddress) errorMessages += "Address should not exceed 500 characters. \n";

    errorElement.textContent = errorMessages;
}