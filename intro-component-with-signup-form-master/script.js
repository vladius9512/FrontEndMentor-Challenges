const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const emailVal = email.value;
    const passwordVal = password.value;
    if (firstNameVal === "") {
        alert("Enter a first name");
    }
    if (lastNameVal === "") {
        alert("Enter a last name");
    }
    if (emailVal === "") {
        alert("Enter a valid email");
    }
    if (passwordVal === "") {
        alert("Enter a valid password");
    }
});
