const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const h2 = document.getElementsByTagName("h2")[0];
const h2Text = h2.innerText;

function hackerEffect() {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        h2.innerText = h2.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return h2Text[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= h2Text.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
}
hackerEffect();
setInterval(hackerEffect, 5000);
