const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const subject = document.querySelector("#subject");
const success = document.querySelector(".success");

function validateForm(event) {
    event.preventDefault();

    if(checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }

    if(checkLength(address.value, 10) === true) {
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
    }

    if(checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    console.log("Relevant input");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}