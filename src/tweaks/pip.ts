import { pipIcon } from "./icons";

const addPip: Function = (): void => {
    var elements: HTMLElement | any = document.querySelectorAll(
        ".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4",
    )[0];
    var pipbtn: HTMLElement | any = document.getElementById("pipbtn");
    if (elements && pipbtn === null) {
        var pipButton: HTMLElement | any = document.createElement("div");
        pipButton.className =
            "bottom-icon cursor-pointer text-white hover:text-main-purple duration-300";
        pipButton.innerHTML = pipIcon;
        pipButton.setAttribute("title", "Picture-In-Picture");
        pipButton.id = "pipbtn";

        pipButton.addEventListener("click", (): void => {
            let vid: any = document.querySelector(
                "video.k4urcfbm.datstx6m.a8c37x1j", //k4urcfbm datstx6m a8c37x1j
            );
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
            } else {
                if (document.pictureInPictureEnabled) {
                    vid.requestPictureInPicture();
                }
            }
        });
        elements.insertBefore(pipButton, elements.firstChild);
    }
};

const addPipButton: Function = (): void => {
    let pipbtn: HTMLElement | any = document.getElementById("pipbtn");
    if (!pipbtn) {
        var observeForPop: MutationObserver = new MutationObserver(
            (mutations: MutationRecord[]): void => {
                mutations.forEach((): void => {
                    addPip();
                });
            },
        );
        observeForPop.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }
};

export default addPipButton;
