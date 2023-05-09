const questionArr = document.getElementsByClassName("question");

function initialiseWebsite() {
    for (let i = 0; i < questionArr.length; i++) {
        questionArr[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }
}

initialiseWebsite();
