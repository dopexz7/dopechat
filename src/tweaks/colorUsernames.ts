const getRandomColor: Function = (): string =>
    "hsl(" +
    360 * Math.random() +
    "," +
    (50 + 50 * Math.random()) +
    "%," +
    (40 + 40 * Math.random()) +
    "%)";

const colorUsernames: Function = (): void => {
    let usernameElement: HTMLElement | any = document.querySelectorAll(
        ".x1ye3gou.xwib8y2.xn6708d.x1y1aw1k > .x1q0g3np.xt0psk2.x6s0dn4 > span > span",
    );
    chrome.storage.local.get(
        [
            "yourUsername",
            "yourUsernameColor",
            "othersUsernameColor",
            "setRandomUsernames",
            "userNameColors",
        ],
        (r: { [key: string]: any }): void => {
            let yourusobj: any = r.userNameColors ? r.userNameColors : {};
            if (r.yourUsername && r.yourUsernameColor) {
                let yourUsername: string = r.yourUsername;
                let yourUsernameColor: string = r.yourUsernameColor;
                yourusobj[yourUsername] = yourUsernameColor;
                chrome.storage.local.set({ userNameColors: yourusobj });
            }
            for (var i = 0; i < usernameElement.length; i++) {
                if (r.setRandomUsernames !== false) {
                    if (usernameElement[i].textContent in yourusobj) {
                        usernameElement[i].style.color =
                            yourusobj[usernameElement[i].textContent];
                    } else {
                        yourusobj[usernameElement[i].textContent] =
                            getRandomColor();
                        chrome.storage.local.set({
                            userNameColors: yourusobj,
                        });
                        usernameElement[i].style.color =
                            yourusobj[usernameElement[i].textContent];
                    }
                } else if (
                    r.othersUsernameColor &&
                    r.setRandomUsernames === false
                ) {
                    usernameElement[i].style.color = r.othersUsernameColor;
                }
            }
        },
    );
};

export default colorUsernames;
