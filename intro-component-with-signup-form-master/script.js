const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const inputs = document.querySelectorAll("input");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const firstNameValidity = firstName.validity.valid;
    const lastNameValidity = lastName.validity.valid;
    const emailValidity = email.validity.valid;
    const passwordValidity = password.validity.valid;
    if (
        firstNameValidity &&
        lastNameValidity &&
        emailValidity &&
        passwordValidity
    ) {
        alert("succes");
    }
});

inputs.forEach((input) => {
    input.addEventListener("keydown", () => {
        let span = input.previousElementSibling;
        setTimeout(() => {
            if (input.value !== "") {
                span.hidden = true;
                input.style.borderColor = "";
            } else {
                span.hidden = false;
                input.style.borderColor = "red";
            }
        }, 10);
    });
});

inputs.forEach((input) => {
    input.addEventListener(
        "blur",
        (e) => {
            const isValid = e.target.validity.valid;
            const message = e.target.validationMessage;
            const connectedValidationId =
                e.target.getAttribute("aria-describedby");
            const connectedValidation = connectedValidationId
                ? document.getElementById(connectedValidationId)
                : false;

            if (connectedValidation && message && !isValid) {
                connectedValidation.style.display = "block";
            } else {
                connectedValidation.style.display = "none";
            }
        },
        true
    );
});
