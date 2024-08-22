// create a form and validate it: email, contact, name, age,designation,select multiple files, DOB and submit form
document.querySelector("#validate").addEventListener("click", validate);

function validate() {
    var name = document.querySelector("#name").value;
    var dob = document.querySelector("#dob").value;
    var age = document.querySelector("#age").value;
    var designation = document.querySelector("#designation").value;
    var email = document.querySelector("#email").value;
    var pwd = document.querySelector("#pwd").value;
    var contact = document.querySelector("#contact").value;
    var file = document.querySelector("#file").value;

    if (validateName(name) && validateDOB(dob) && validateAge(age) && validateDesignation(designation) && validateEmail(email) && validatePassword(pwd) && validateContact(contact) && validateFiles(file)) {
        alert("Form is submitted");
        document.querySelector("#name").value = "";
        document.querySelector("#dob").value = "";
        document.querySelector("#age").value = "";
        document.querySelector("#designation").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#pwd").value = "";
        document.querySelector("#contact").value = "";
        document.querySelector("#file").value = "";
    }
}

function validateName(name) {
    var formValid = false;
    if (name.trim() === "") {
        document.querySelector("#name-error").innerHTML = "This is required*";
        formValid = false;
    } else if (name.trim().length < 3) {
        document.querySelector("#name-error").innerHTML = "This is invalid";
        formValid = false;
    } else {
        document.querySelector("#name-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}

function validateDOB(dob) {
    var formValid = false;
    let dobRegex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (dob.trim() === "") {
        document.querySelector("#dob-error").innerHTML = "This is required*";
        formValid = false;
    } else if (!dobRegex.test(dob)) {
        document.querySelector("#dob-error").innerHTML = "This is invalid";
        formValid = false;
    } 
    else {
        document.querySelector("#dob-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}

function validateAge(age) {
    var formValid = false;
    if (age.trim() === "") {
        document.querySelector("#age-error").innerHTML = "This is required*";
        formValid = false;
    } else if (age.trim().length > 2) {
        document.querySelector("#age-error").innerHTML = "This is invalid";
        formValid = false;
    } else {
        document.querySelector("#age-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}

function validateDesignation(designation) {
    var formValid = false;
    if (designation.trim() === "") {
        document.querySelector("#designation-error").innerHTML = "This is required*";
        formValid = false;
    } else if (designation.trim().length < 2) {
        document.querySelector("#designation-error").innerHTML = "This is invalid";
        formValid = false;
    } else {
        document.querySelector("#designation-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}

function validateEmail(email) {
    let emailRegex=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    var formValid = false;
    if (email.trim() === "") {
      document.querySelector("#email-error").innerHTML = "This is required*";
      formValid = false;
    } else if (!emailRegex.test(email)) {
      document.querySelector("#email-error").innerHTML = "This is invalid";
      formValid = false;
    } else {
      document.querySelector("#email-error").innerHTML = "";
      formValid = true;
    }
    return formValid;
  }

function validatePassword(pwd) {
    var formValid = false;
    let pwdRegex=/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pwd.trim() === "") {
        document.querySelector("#password-error").innerHTML = "This is required*";
        formValid = false;
    } else if (!pwdRegex.test(pwd)) {
        document.querySelector("#password-error").innerHTML = "This is invalid";
        formValid = false;
    } else {
        document.querySelector("#password-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}

function validateContact(contact) {
    var formValid = false;
    let contactRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (contact.trim() === "") {
        document.querySelector("#contact-error").innerHTML = "This is required*";
        formValid = false;
    } else if (contact.trim().length != 10) {
        document.querySelector("#contact-error").innerHTML = "This is invalid";
        formValid = false;
    } else if (!contactRegex.test(contact)) {
        document.querySelector("#contact-error").innerHTML = "This is invalid";
        formValid = false;
    } else {
        document.querySelector("#contact-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}

function validateFiles(file) {
    var formValid = false;
    if (file.trim() === "") {
        document.querySelector("#file-error").innerHTML = "This is required*";
        formValid = false;
    } else {
        document.querySelector("#file-error").innerHTML = "";
        formValid = true;
    }

    return formValid;
}