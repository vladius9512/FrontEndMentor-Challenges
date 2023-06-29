let steps = [];
document.querySelectorAll("#values option").forEach((option) => {
    steps.push(option.value);
});

const slider = document.querySelector("#slider");

slider.addEventListener("change", (e) => {
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
        console.log("a");
    });
});
