document.getElementById('formSubmit').addEventListener('click', (event) => {
    event.preventDefault();
    submit();
})


const submit = () => {
    //DOM selector init
    const nameContent = document.getElementById('nameInput').value;
    const emailContent = document.getElementById('emailInput').value;
    const subjectContent = document.getElementById('subjectInput').value;
    const messageContent = document.getElementById('messageInput').value;
    const errorElement = document.getElementById('error');

    //Validate init
    const BLANK = 0;
    const maxName = 100;
    const maxEmail = 100;
    const minSubject = 50;
    const maxSubject = 250;
    const maxMessage = 500;

    //Validate form
    let errorMessages = "";

    //  Name input
    if (nameContent.length === BLANK) errorMessages += "Please fill out your name.\n";
    else if (nameContent.length > maxName) errorMessages += "Your name should not exceed 100 characters.\n";

    //  Email input
    if (emailContent.length === BLANK) errorMessages += "Please fill out your email. \n";
    else if (emailContent.length > maxEmail) errorMessages += "Your email should not exceed 100 characters.\n";

    //  Subject input
    if (subjectContent.length === BLANK) errorMessages += "Please fill out the subject.\n";
    else if (subjectContent.length < minSubject) errorMessages += "Subject should not shorter than 50 characters.\n";
    else if (subjectContent.length > maxSubject) errorMessages += "Subject should not exceed 250 characters. \n";

    //  Message input
    if (messageContent.length === BLANK) errorMessages += "Please fill out the message.";
    else if (messageContent.length > maxMessage) errorMessages += "Message should not exceed 500 characters. \n";

    errorElement.textContent = errorMessages;
}