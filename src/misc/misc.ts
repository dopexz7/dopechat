const misc: Function = (): void => {
    document.documentElement.style.setProperty("--usernamecolor", "#000");
    document.documentElement.style.setProperty("--fontfamily", "Helvetica");
    document.documentElement.style.setProperty("--chatwidth", "354px");
    document.documentElement.style.setProperty("--chattopbarcolor", "#18181b");
    document.documentElement.style.setProperty("--messagestyle", "left");
    document.documentElement.style.setProperty("--currentvolon", "0");
    document.addEventListener("keydown", (e: any): void => {
        if (e.keyCode === 80 && e.altKey) {
            let vid: any = document.querySelector(
                "video.xh8yej3.x5yr21d.x1lliihq",
            );
            if (document.pictureInPictureElement)
                document.exitPictureInPicture();
            else {
                if (document.pictureInPictureEnabled)
                    vid.requestPictureInPicture();
            }
        }
    });
    document.addEventListener("keydown", (e: any): void => {
        if (e.keyCode === 84 && e.altKey) {
            if (
                document.querySelectorAll<HTMLElement>('[role="banner"]')[0]
                    .style.display !== "none"
            ) {
                document.querySelectorAll<HTMLElement>(
                    '[role="banner"]',
                )[0].style.display = "none";
                document.querySelector<HTMLElement | any>(
                    ".xxzkxad",
                ).style.top = "0";
                document.querySelectorAll<HTMLElement>(
                    ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
                )[0].style.top = "0";
                document.querySelectorAll<HTMLElement>(
                    ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
                )[0].style.minHeight = "100vh";
                document.querySelectorAll<HTMLElement>(
                    ".x78zum5.xdt5ytf.xtp0wl1",
                )[0].style.height = "100vh";
                document.querySelectorAll<HTMLElement>(
                    ".x78zum5.xdt5ytf.x1n2onr6.xat3117.xxzkxad",
                )[0].style.minHeight = "100vh";
                document.querySelectorAll<HTMLElement>(
                    ".x78zum5.xdt5ytf.xtp0wl1.x6ikm8r.x10wlt62",
                )[0].style.height = "100vh";
                document.querySelectorAll<HTMLElement>(
                    ".xtp0wl1.x10wlt62",
                )[0].style.height = "100vh";
            } else {
                document.querySelectorAll<HTMLElement>(
                    '[role="banner"]',
                )[0].style.display = "";
                document.querySelector<HTMLElement | any>(
                    ".xxzkxad",
                ).style.top = "";
                document.querySelectorAll<HTMLElement>(
                    ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
                )[0].style.top = "";
                document.querySelectorAll<HTMLElement>(
                    ".x2bj2ny.x78zum5.xds687c.xdt5ytf.xnjgh8c.xixxii4.x1qrby5j.xjabf5u.xfmqk8h.xxzkxad",
                )[0].style.minHeight = "";
                document.querySelectorAll<HTMLElement>(
                    ".x78zum5.xdt5ytf.xtp0wl1",
                )[0].style.height = "";
                document.querySelectorAll<HTMLElement>(
                    ".x78zum5.xdt5ytf.x1n2onr6.xat3117.xxzkxad",
                )[0].style.minHeight = "";
                document.querySelectorAll<HTMLElement>(
                    ".x78zum5.xdt5ytf.xtp0wl1.x6ikm8r.x10wlt62",
                )[0].style.height = "";
                document.querySelectorAll<HTMLElement>(
                    ".xtp0wl1.x10wlt62",
                )[0].style.height = "";
            }
        }
    });
};

export default misc;
