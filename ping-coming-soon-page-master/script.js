const buttonNotify = document.getElementById("notify");

buttonNotify.addEventListener("click", () => {
    const inputEmail = document.getElementById("email");
    const connectedValidationId = inputEmail.getAttribute("aria-describedby");
    const connectedValidation = document.getElementById(connectedValidationId);
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)
    ) {
        connectedValidation.style.display = "none";
    } else {
        connectedValidation.style.display = "block";
    }
});
