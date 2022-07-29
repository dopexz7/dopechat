import { popoutIcon } from "./icons";

const addPopoutChat: Function = (): void => {
    var elements: HTMLElement | any = document.querySelectorAll(
        ".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4",
    )[0];
    var popbtn: HTMLElement | any = document.getElementById("popbtn");

    if (elements && popbtn === null) {
        var popoutButton: HTMLElement | any = document.createElement("div");
        popoutButton.className =
            "bottom-icon cursor-pointer text-white hover:text-main-purple duration-300";
        popoutButton.innerHTML = popoutIcon;
        popoutButton.setAttribute("title", "Popout chat");
        popoutButton.id = "popbtn";
        popoutButton.addEventListener("click", (): void => {
            var myWindow: Window | any = window.open(
                window.location.href,
                "newWindow",
                "width=500,height=700",
            );
            var setChatPopout: NodeJS.Timer = setInterval((): void => {
                try {
                    if (
                        myWindow.document.querySelectorAll(
                            '[role="banner"]',
                        )[0] !== undefined &&
                        myWindow.document.querySelectorAll(
                            '[role="main"]',
                        )[0] !== undefined &&
                        myWindow.document.querySelectorAll(".jgljxmt5")[0] !==
                            undefined &&
                        myWindow.document.querySelectorAll(
                            ".fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn",
                        )[0] !== undefined &&
                        myWindow.document.querySelectorAll(".be9z9djy")[0] !==
                            undefined &&
                        myWindow.document.getElementById("popbtn") !==
                            undefined &&
                        myWindow.document.querySelectorAll(
                            ".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn",
                        )[0] !== undefined
                    ) {
                        myWindow.document.querySelectorAll(
                            '[role="banner"]',
                        )[0].style.display = "none";
                        myWindow.document.querySelectorAll(
                            '[role="main"]',
                        )[0].style.display = "none";
                        myWindow.document.documentElement.style.setProperty(
                            "--chatwidth",
                            "100%",
                        );
                        myWindow.document.querySelectorAll(
                            ".rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.du4w35lb.q5bimw55.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.eg9m0zos.c3g1iek1.l9j0dhe7.k4xni2cv.o36gj0jk",
                        )[0].style.width = "100vw";
                        myWindow.document.querySelectorAll(
                            ".jgljxmt5",
                        )[0].style.minHeight = "100vh";
                        myWindow.document.querySelectorAll(
                            ".fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn",
                        )[0].style.left = "1%";
                        myWindow.document.querySelectorAll(
                            ".be9z9djy",
                        )[0].style.top = "0";
                        myWindow.document.getElementById(
                            "popbtn",
                        ).style.display = "none";
                        myWindow.document.querySelectorAll(
                            ".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn",
                        )[0].style.paddingBottom = "0";

                        clearInterval(setChatPopout);
                    }
                } catch (e) {
                    console.log(e);
                }
            }, 1);
        });
        elements.insertBefore(popoutButton, elements.firstChild);
    }
};

const addPopoutChatButton: Function = (): void => {
    let popbutn: HTMLElement | any = document.getElementById("popbtn");
    if (!popbutn) {
        var observeForPop: MutationObserver = new MutationObserver(
            (mutations: MutationRecord[]): void => {
                mutations.forEach((): void => {
                    addPopoutChat();
                });
            },
        );
        observeForPop.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }
};

export default addPopoutChatButton;
