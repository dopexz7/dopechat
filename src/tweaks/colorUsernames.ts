const getRandomColor: Function = (): string =>
    "hsl(" +
    360 * Math.random() +
    "," +
    (50 + 50 * Math.random()) +
    "%," +
    (40 + 40 * Math.random()) +
    "%)";

const colorUsernames: Function = (): void => {
    let usernameElement: HTMLElement | any = document.getElementsByClassName(
        "d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn mdeji52x",
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
