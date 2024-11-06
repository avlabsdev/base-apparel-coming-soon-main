let emailInput = document.querySelector('#email-input');
let submitBtn = document.querySelector('#submit-btn');
let errorMsg = document.querySelector('.error-msg');
let errorIcon = document.querySelector('.error-icon');
let atSignCheck = "@";
let form = document.querySelector('#form');
let successIcon = document.querySelector('.success-icon');
let successMsg = document.querySelector('.success-msg')

submitBtn.addEventListener("click", function (e) {
    if (emailInput.value == "" || emailInput.value.includes(atSignCheck) == false) {
        errorMsg.style.display = "flex";
        errorIcon.style.display = "flex";
        successMsg.style.display = "none";
        successIcon.style.display = "none";
        console.log("error!");
        e.preventDefault();
    } else {
        errorMsg.style.display = "none";
        errorIcon.style.display = "none";
        successMsg.style.display = "flex";
        successIcon.style.display = "flex";
        console.log("no errors!");

        setTimeout(function () {
            successIcon.style.display = 'none'
            successMsg.style.display = 'none'
        }, 2500)

        e.preventDefault();
        form.reset();
    }
});
