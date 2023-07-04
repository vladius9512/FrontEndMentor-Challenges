let steps = ["8.00", "12.00", "16.00", "24.00", "36.00"];

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
        slider.min = 72;
        slider.max = 324;
        setPrice(72);
        setPageviews(pageviews[72]);
    } else {
        slider.min = 8;
        slider.max = 36;
        setPrice(36);
        setPageviews(pageviews[36]);
    }
});

slider.addEventListener("change", (e) => {
    if (yearly.checked) {
        yearlySteps.forEach((v, i) => {
            if (
                e.target.value <= parseFloat(v) &&
                !yearlySteps.includes(e.target.value)
            ) {
                e.target.value =
                    i > 0
                        ? parseFloat(v) - e.target.value <
                          (parseFloat(v) - parseFloat(yearlySteps[i - 1])) / 2
                            ? v
                            : yearlySteps[i - 1]
                        : v;
            }
            setPrice(e.target.value);
            setPageviews(pageviews[parseFloat(e.target.value)]);
        });
    } else {
        steps.forEach((v, i) => {
            if (
                e.target.value <= parseFloat(v) &&
                !steps.includes(e.target.value)
            ) {
                e.target.value =
                    i > 0
                        ? parseFloat(v) - e.target.value <
                          (parseFloat(v) - parseFloat(steps[i - 1])) / 2
                            ? v
                            : steps[i - 1]
                        : v;
            }
            setPrice(e.target.value);
            setPageviews(pageviews[parseFloat(e.target.value)]);
        });
    }
});

const setPrice = (price) => {
    displayPrice.innerText = `$${price}`;
};

const setPageviews = (pageviews) => {
    displayPageviews.innerText = `${pageviews}`;
};
