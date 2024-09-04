document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    
    function showError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        small.innerText = message;
        formControl.className = "form-control error";
    }
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        if (re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, "Email is not valid");
        }
    }

    function checkRequired(inputArr) {
        inputArr.forEach(function (input) {
            if (input.value.trim() === "") {
                showError(input, `${getFieldName(input)} is required`);
            } else {
                showSuccess(input);
            }
        });
    }
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        } else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        } else {
            showSuccess(input);
        }
    }
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        checkRequired([nameInput, emailInput, messageInput]);
        checkLength(nameInput, 3, 25);
        checkLength(messageInput, 10, 300);
        checkEmail(emailInput);

    });
});
