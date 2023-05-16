const buttonNotify = document.getElementById("notify");

buttonNotify.addEventListener("click", () => {
    const inputEmail = document.getElementById("email");
    const connectedValidationId = inputEmail.getAttribute("aria-describedby");
    const connectedValidation = document.getElementById(connectedValidationId);
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)
    ) {
        connectedValidation.style.display = "none";
        inputEmail.style.borderColor = "var(--paleblue)";
    } else if (inputEmail.value === "") {
        inputEmail.style.borderColor = "var(--lightRed)";
        connectedValidation.style.display = "block";
        connectedValidation.innerText =
            "Whoops! It looks like you forgot to add your email";
    } else {
        inputEmail.style.borderColor = "var(--lightRed)";
        connectedValidation.style.display = "block";
        connectedValidation.innerText = "You must enter a valid email address";
    }
});
