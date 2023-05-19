const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const inputs = document.getElementsByTagName("input");
const outputDivs = document.getElementsByClassName("age");
const imageButton = document.getElementById("image-container");

document.addEventListener("wheel", () => {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
});

for (let input of inputs) {
    input.addEventListener("keydown", (e) => {
        let max = +input.getAttribute("max");
        const inputElem = e.target;
        const connectedValidationId =
            inputElem.getAttribute("aria-describedby");
        const connectedValidation = document.getElementById(
            connectedValidationId
        );
        if (input.id === "year") {
            max = 9999;
        }
        const typed = +e.key;
        const regex = /[^0-9.]/g;
        if (!isNaN(typed)) e.preventDefault();
        if (e.target.value + typed <= max) {
            input.value += typed;
            connectedValidation.style.display = "none";
        } else {
            connectedValidation.style.display = "block";
            connectedValidation.innerText = "Must be a valid date";
        }
        if (e.keyCode === 8 || !regex.test(typed)) {
            return e;
        } else {
            e.preventDefault();
        }
    });
}

imageButton.addEventListener("click", () => {
    const dayValue = day.value;
    const monthValue = month.value;
    const yearValue = year.value;
    if (dayValue === "") {
        const dayAriaId = day.getAttribute("aria-describedby");
        const ariaSpan = document.getElementById(dayAriaId);
        ariaSpan.style.display = "block";
        ariaSpan.innerText = "Field is required";
    }
    if (monthValue === "") {
        const monthAriaId = month.getAttribute("aria-describedby");
        const ariaSpan = document.getElementById(monthAriaId);
        ariaSpan.style.display = "block";
        ariaSpan.innerText = "Field is required";
    }
    if (yearValue === "") {
        const yearAriaId = year.getAttribute("aria-describedby");
        const ariaSpan = document.getElementById(yearAriaId);
        ariaSpan.style.display = "block";
        ariaSpan.innerText = "Field is required";
    }
    let inputDate = `${yearValue}-${monthValue}-${dayValue}`;
    if (isNaN(validDate(inputDate))) {
        return;
    }
    const age = calculateAge(dayValue, monthValue, yearValue);
    updateAge(age.year, age.month, age.day);
});

function validDate(inputDate) {
    return Date.parse(inputDate);
}

function calculateAge(inputDay, inputMonth, inputYear) {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    let yearAge = currentYear - inputYear;
    let monthAge, dayAge;
    if (currentMonth >= inputMonth) {
        monthAge = currentMonth - inputMonth;
    } else {
        yearAge--;
        monthAge = 12 + currentMonth - inputMonth;
    }
    if (currentDay >= inputDay) {
        dayAge = currentDay - inputDay;
    } else {
        monthAge--;
        dayAge = 31 + currentDay - inputDay;
    }
    if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
    }
    return { year: yearAge, month: monthAge, day: dayAge };
}

function updateAge(years, months, days) {
    outputDivs[0].innerHTML = years;
    outputDivs[1].innerHTML = months;
    outputDivs[2].innerHTML = days;
}
