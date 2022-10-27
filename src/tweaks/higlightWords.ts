const setHighlightWords: Function = (): void => {
    var newc: any[] = [];
    var messageElement: HTMLElement | any = document.getElementsByClassName(
        "x1n2onr6 x1cy8zhl x9f619 x2lah0s xjkvuk6 x1pi30zi x1swvt13 x1iorvi4 x78zum5 x1q0g3np x1a2a7pz",
    );

    chrome.storage.local.get(
        [
            "highlightEnable",
            "highlightKeywords",
            "highlightColor",
            "highlightOpacity",
        ],
        (r: { [key: string]: any }): void => {
            if (r.highlightEnable !== null && r.highlightEnable !== false) {
                if (r.highlightKeywords && r.highlightColor) {
                    newc = r.highlightKeywords;
                    for (var x = 0; x < messageElement.length; x++) {
                        messageElement[x].style.backgroundColor = "transparent";
                        messageElement[x].style.opacity = "1";
                        messageElement[x].style.transform = "none";
                        var textassplit =
                            messageElement[x].textContent.split(" ");
                        for (var l = 0; l < textassplit.length; l++) {
                            for (var j = 0; j < newc.length; j++) {
                                if (textassplit[l].includes(newc[j])) {
                                    messageElement[x].style.transform =
                                        "scale(1.02)";
                                    messageElement[x].style.opacity =
                                        r.highlightOpacity;
                                    messageElement[x].style.backgroundColor =
                                        r.highlightColor;
                                }
                            }
                        }
                    }
                }
            } else {
                for (var p = 0; p < messageElement.length; p++) {
                    messageElement[p].style.backgroundColor = "transparent";
                }
            }
        },
    );
};

export default setHighlightWords;
