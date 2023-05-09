const mainElem = document.getElementById("main");
let chosenRating = null;

function createElem(elemType, className, src) {
    const elem = document.createElement(elemType);
    if (className) {
        elem.classList.add(className);
    }

    if (src) {
        elem.src = src;
    }
    return elem;
}

function initializeSite() {
    const starDiv = createElem("div", "rating-star");
    const starImg = createElem("img", "imageStar", "./images/icon-star.svg");
    const h1 = createElem("h1");
    h1.innerText = "How did we do?";
    const pElem = createElem("p");
    pElem.innerText =
        "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
    const fbScoresContainerDiv = createElem("div", "feedback-container");
    const feedbackElements = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
    ];
    feedbackElements.forEach((elem) => {
        const feedbackDOMElement = createElem("div", `feedback-score`);
        feedbackDOMElement.innerText = elem.value;
        feedbackDOMElement.addEventListener("click", () => {
            const activeRating = document.querySelector(
                ".feedback-score.active"
            );
            if (activeRating) {
                activeRating.classList.remove("active");
            }
            feedbackDOMElement.classList.add("active");
            chosenRating = elem.value;
        });
        fbScoresContainerDiv.appendChild(feedbackDOMElement);
    });
    const btnDiv = createElem("div", "button-container");
    const btnSubmit = createElem("button", "submit");

    btnSubmit.innerText = "SUBMIT";
    btnSubmit.addEventListener("click", () => {
        if (!chosenRating) {
            return;
        }
        mainElem.innerHTML = "";
        submitedView(chosenRating);
    });
    starDiv.appendChild(starImg);
    btnDiv.appendChild(btnSubmit);
    mainElem.append(starDiv, h1, pElem, fbScoresContainerDiv, btnDiv);
}

function submitedView(starRating) {
    const containerDiv = createElem("div", "container-submited");
    const thanksDiv = createElem("div", "thank-you");
    const thanksImg = createElem(
        "img",
        "thank-you-image",
        "./images/illustration-thank-you.svg"
    );
    const customerRatingDiv = createElem("div", "customer-rating");
    customerRatingDiv.innerText = `You selected ${starRating} out of 5`;
    const h2 = createElem("h2");
    h2.innerText = "Thank you!";
    const callDiv = createElem("div", "call-to-action");
    const pElem = createElem("p");
    pElem.innerText =
        "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    callDiv.appendChild(pElem);
    thanksDiv.appendChild(thanksImg);
    containerDiv.append(thanksDiv, customerRatingDiv, h2, callDiv);
    mainElem.appendChild(containerDiv);
}

initializeSite();
