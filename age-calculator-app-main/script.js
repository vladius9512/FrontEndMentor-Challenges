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
        if (input.id === "year") {
            max = 9999;
        }
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
    const dayValue = day.value;
    const monthValue = month.value;
    const yearValue = year.value;
    let inputDate = `${yearValue}-${monthValue}-${dayValue}`;
    if (isNaN(validDate(inputDate))) {
        alert("invalid date");
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
