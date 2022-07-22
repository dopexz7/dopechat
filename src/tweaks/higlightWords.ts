const setHighlightWords: Function = (): void => {
    var newc: any[] = [];
    var messageElement: HTMLElement | any = document.getElementsByClassName(
        "l9j0dhe7 ll8tlv6m rq0escxv j83agx80 pfnyh3mw e5nlhep0 hv4rvrfc dati1w0a ecm0bbzt btwxx1t3 lzcic4wl",
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
