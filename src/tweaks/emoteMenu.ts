import { emoteMenuIcon } from "./icons";

const addEmoteMenu: Function = (): void => {
    var elements: HTMLElement | any = document.querySelectorAll(
        ".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4",
    )[0];
    var emotebtn: HTMLElement | any = document.getElementById(
        "dopechat-emotebutton",
    );

    if (elements && emotebtn === null) {
        var emotebutton: HTMLElement | any = document.createElement("div");
        emotebutton.className =
            "bottom-icon cursor-pointer text-white hover:text-main-purple duration-300";
        emotebutton.innerHTML = emoteMenuIcon;
        emotebutton.setAttribute("title", "Emote menu");

        emotebutton.id = "dopechat-emotebutton";
        elements.insertBefore(emotebutton, elements.firstChild);
    }
};

const addEmoteMenuButton: Function = (): void => {
    let emotebuttonDiv: HTMLElement | any = document.getElementById(
        "dopechat-emotebutton",
    );
    if (!emotebuttonDiv) {
        var observeForPop: MutationObserver = new MutationObserver(
            (mutations: MutationRecord[]): void => {
                mutations.forEach((): void => {
                    addEmoteMenu();
                });
            },
        );
        observeForPop.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }
};

export default addEmoteMenuButton;
