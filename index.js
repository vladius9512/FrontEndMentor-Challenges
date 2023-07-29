const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const links = document.querySelectorAll("a");
const desktopBtn = document.getElementById("desktop");
const mobileBtn = document.getElementById("mobile");

links.forEach((link) => {
    link.addEventListener("mouseover", (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 1);
    });
});
mobileBtn.addEventListener("mouseover", (e) => {
    const img = mobileBtn.parentElement.parentElement.children[0].children[0];
});
