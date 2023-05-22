const body = document.getElementsByTagName("body")[0];
const mobileMenuBtn = document.getElementsByClassName(
    "mobile-menu-button-container"
)[0];
const buttonsContainer =
    document.getElementsByClassName("buttons-container")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const closeBtn = document.getElementsByClassName("close-button-container")[0];

mobileMenuBtn.addEventListener("click", () => {
    openMenu();
});

closeBtn.addEventListener("click", () => {
    closeMenu();
});

function openMenu() {
    buttonsContainer.classList.remove("closed");
    overlay.classList.add("active");
    body.style.position = "fixed";
    closeBtn.classList.remove("closed");
}

function closeMenu() {
    buttonsContainer.classList.add("closed");
    overlay.classList.remove("active");
    body.style.position = "unset";
    closeBtn.classList.add("closed");
}
