const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const inputs = document.getElementsByTagName("input");
const imageButton = document.getElementById("image-container");

document.addEventListener("wheel", () => {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
});

for (let input of inputs) {
    input.addEventListener("keydown", (e) => {
        let max = +input.getAttribute("max");
        if (input.id === "year") {
            max = 9999;
        }
        console.log(max);
        const typed = +e.key;
        const regex = /[^0-9.]/g;
        if (!isNaN(typed)) e.preventDefault();
        if (e.target.value + typed <= max) {
            input.value += typed;
        } else {
            console.log(`Number too big! Max is ${max}`);
        }
        if (e.keyCode === 8 || !regex.test(typed)) {
            return e;
        } else {
            e.preventDefault();
        }
    });
}

imageButton.addEventListener("click", () => {
    let dayValue = day.value;
    let monthValue = month.value;
    let yearValue = year.value;
    console.log(dayValue, monthValue, yearValue);
});
