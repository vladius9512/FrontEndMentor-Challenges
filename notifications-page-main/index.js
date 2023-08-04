const main = document.getElementsByTagName("main")[0];

const notification = {
    imgsrc: null,
    friendName: null,
    action: null,
    pastPost: null,
    time: null,
    message: null,
    seen: false,
};

const notificationsArray = [];

function createElement(elementName, className, innerText) {
    const elem = document.createElement(elementName);
    if (className != null) {
        elem.classList.add(className);
    }
    if (innerText != null) {
        elem.innerText = innerText;
    }
    return elem;
}

function createNotification(imgsrc, friendName, action, time, pastPost) {
    const notificationContainerDiv = createElement(
        "div",
        "notification-container"
    );
    const imageWrapperDiv = createElement("div", "image-wrapper");
    const img = createElement("img");
    img.src = imgsrc;
    img.alt = "avatar-mark-webber";
    const informationContainerDiv = createElement(
        "div",
        "information-container"
    );
    const messageContainerDiv = createElement("div", "message-container");
    const friendWrapperDiv = createElement("div", "friend-wrapper", friendName);
    const actionWrapperDiv = createElement("div", "action-wrapper", action);
    const postWrapperDiv = createElement("div", "post-wrapper", pastPost);
    const timeWrapperDiv = createElement("div", "time-wrapper", time);
    messageContainerDiv.append(
        friendWrapperDiv,
        actionWrapperDiv,
        postWrapperDiv
    );
    informationContainerDiv.append(messageContainerDiv, timeWrapperDiv);
    imageWrapperDiv.append(img);
    notificationContainerDiv.append(imageWrapperDiv, informationContainerDiv);
    main.appendChild(notificationContainerDiv);
}

createNotification(
    "./assets/images/avatar-mark-webber.webp",
    "Mark Webber",
    "reacted to your recent post",
    "My first tournament today!",
    "1m ago"
);
