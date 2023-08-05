const main = document.getElementsByTagName("main")[0];
const unseenNotifications =
    document.getElementsByClassName("unseen-wrapper")[0];

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

function createNotification(
    imgsrc,
    imgalt,
    friendName,
    action,
    time,
    pastPost,
    seen
) {
    const notificationContainerDiv = createElement(
        "div",
        "notification-container"
    );
    if (seen === false) {
        notificationContainerDiv.classList.add("notseen");
    }
    const imageWrapperDiv = createElement("div", "image-wrapper");
    const img = createElement("img");
    img.src = imgsrc;
    img.alt = imgalt;
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

function createNotificationObject(
    imgsrc,
    imgalt,
    friendName,
    action,
    pastPost,
    time,
    message,
    seen
) {
    const notification = {
        imgsrc: imgsrc,
        imgalt: imgalt,
        friendName: friendName,
        action: action,
        pastPost: pastPost,
        time: time,
        message: message,
        seen: seen,
    };
    notificationsArray.push(notification);
}

createNotificationObject(
    "./assets/images/avatar-mark-webber.webp",
    "avatar-mark-webber",
    "Mark Webber",
    "reacted to your recent post",
    "My first tournament today!",
    "1m ago",
    null,
    false
);
createNotificationObject(
    "./assets/images/avatar-angela-gray.webp",
    "avatar-angela-gray",
    "Angela Gray",
    "followed you",
    null,
    "5m ago",
    null,
    false
);

createNotificationObject(
    "./assets/images/avatar-jacob-thompson.webp",
    "avatar-jacob-thompson",
    "Jacob Thompson",
    "has joined your group",
    "Chess Club",
    "1day ago",
    null,
    false
);

//private message notification
createNotificationObject(
    "./assets/images/avatar-rizky-hasanuddin.webp",
    "avatar-rizky-hasanuddin",
    "Rizky Hasanuddin",
    "sent you a private message",
    null,
    "5 days ago",
    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    true
);

//picture comment notification
createNotificationObject(
    "./assets/images/avatar-kimberly-smith.webp",
    "avatar-kimberly-smith",
    "Kimberly Smith",
    "commented on your picture",
    null,
    "1 week ago",
    null,
    true
);

createNotificationObject(
    "./assets/images/avatar-nathan-peterson.webp",
    "avatar-nathan-peterson",
    "Nathan Peterson",
    "reacted to your recent post",
    "5 end-game strategies to increase your win rate",
    "2 weeks ago",
    null,
    true
);

createNotificationObject(
    "./assets/images/avatar-anna-kim.webp",
    "avatar-anna-kim",
    "Anna Kim",
    "left the group",
    "Chess Club",
    "2 weeks ago",
    null,
    true
);

createNotification(
    "./assets/images/avatar-mark-webber.webp",
    "avatar-mark-webber",
    "Mark Webber",
    "reacted to your recent post",
    "My first tournament today!",
    "1m ago",
    false
);

//create function to count the unseen notifications

function checkSeenNotifications(notificationsArray) {
    let unseenCounter = 0;
    notificationsArray.forEach((notificationObject) => {
        if (notificationObject.seen === false) {
            unseenCounter++;
        }
    });
    return unseenCounter;
}

function updateSeenNotifications(notificationsArray) {
    unseenNotifications.innerText = checkSeenNotifications(notificationsArray);
}

updateSeenNotifications(notificationsArray);
