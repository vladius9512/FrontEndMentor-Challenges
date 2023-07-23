const steps = ["8.00", "12.00", "16.00", "24.00", "36.00"];

const yearlySteps = ["72.00", "108.00", "144.00", "216.00", "324.00"];
const pageviews = {
    8: "10K",
    12: "50K",
    16: "100K",
    24: "500K",
    36: "1M",
    72: "10K",
    108: "50K",
    144: "100K",
    216: "500K",
    324: "1M",
};

const yearly = document.getElementById("yearly");
const displayPrice = document.getElementsByClassName("price")[0];
const displayPageviews = document.getElementsByClassName("pageviews")[0];
const slider = document.querySelector("#slider");
yearly.addEventListener("change", (e) => {
    if (yearly.checked) {
        slider.min = 5;
        slider.max = 9;
        slider.ariaValueMin = 5;
        slider.ariaValueMax = 9;
        slider.ariaValueNow = 7;
        slider.value = 7;
        setPrice(yearlySteps[2]);
        setPageviews(pageviews[108]);
    } else {
        slider.min = 0;
        slider.max = 4;
        slider.ariaValueMin = 0;
        slider.ariaValueMax = 4;
        slider.ariaValueNow = 2;
        slider.value = 2;
        setPrice(steps[2]);
        setPageviews(pageviews[16]);
    }
});

slider.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "0":
            setPrice(steps[0]);
            setPageviews(pageviews[8]);
            break;
        case "1":
            setPrice(steps[1]);
            setPageviews(pageviews[12]);
            break;
        case "2":
            setPrice(steps[2]);
            setPageviews(pageviews[16]);
            break;
        case "3":
            setPrice(steps[3]);
            setPageviews(pageviews[24]);
            break;
        case "4":
            setPrice(steps[4]);
            setPageviews(pageviews[36]);
            break;
        case "5":
            setPrice(yearlySteps[0]);
            setPageviews(pageviews[72]);
            break;
        case "6":
            setPrice(yearlySteps[1]);
            setPageviews(pageviews[108]);
            break;
        case "7":
            setPrice(yearlySteps[2]);
            setPageviews(pageviews[144]);
            break;
        case "8":
            setPrice(yearlySteps[3]);
            setPageviews(pageviews[216]);
            break;
        case "9":
            setPrice(yearlySteps[4]);
            setPageviews(pageviews[324]);
            break;
    }
});

const setPrice = (price) => {
    displayPrice.innerText = `$${price}`;
};

const setPageviews = (pageviews) => {
    displayPageviews.innerText = `${pageviews}`;
};
