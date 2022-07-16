function check() {
    var email1 = document.getElementById("email");
    var email2 = document.getElementById("reEmail");
    if (email1.value !== email2.value) {
        alert("The two emails must match !!");
        return false;
    }
}
