const mainElem = document.getElementById("main");

function createElem(elemType, className, src) {
    const elem = document.createElement(elemType);
    elem.classList.add = className;
    elem.src = src;
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
    const fbScore1 = createElem("div", "feedback-score 1");
    fbScore1.innerText = "1";
    const fbScore2 = createElem("div", "feedback-score 2");
    fbScore2.innerText = "2";
    const fbScore3 = createElem("div", "feedback-score 3");
    fbScore3.innerText = "3";
    const fbScore4 = createElem("div", "feedback-score 4");
    fbScore4.innerText = "4";
    const fbScore5 = createElem("div", "feedback-score 5");
    fbScore5.innerText = "5";
    const btnDiv = createElem("div", "button-container");
    const btnSubmit = createElem("button", "submit");
    btnSubmit.innerText = "Submit";
    starDiv.appendChild(starImg);
    btnDiv.appendChild(btnSubmit);
    mainElem.append(
        starDiv,
        h1,
        pElem,
        fbScore1,
        fbScore2,
        fbScore3,
        fbScore4,
        fbScore5,
        btnDiv
    );
}

function submitedView() {
    const thanksDiv = createElem("div", "thank-you");
    const thanksImg = createElem(
        "img",
        "thank-you-image",
        "./images/illustration-thank-you.svg"
    );
    const customerRatingDiv = createElem("div", "customer-rating");
    const h2 = createElem("h2");
    h2.innerText = "Thank you!";
    const callDiv = createElem("div", "call-to-action");
    const pElem = createElem("p");
    pElem.innerText =
        "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    callDiv.appendChild(pElem);
    thanksDiv.appendChild(thanksImg);
    mainElem.append(thanksDiv, customerRatingDiv, h2, callDiv);
}

initializeSite();
submitedView();
