const dopeChatSettingsWrapper: Function = (): void => {
    let elements: HTMLElement | any = document.querySelectorAll(
        ".x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x78zum5.x1q0g3np.xdj266r.x1emribx.xat24cr.x1i64zmx.xz9dl7a.x1sxyh0.xsag5q8.xurb0ha",
    )[0].parentElement;
    let dopeWrapper: HTMLElement | any = document.getElementById(
        "dopechat-settingswrapper",
    );

    if (elements && dopeWrapper === null) {
        let settingsWrapper: HTMLElement | any = document.createElement("div");
        settingsWrapper.className =
            "text-sm border-b-[1px] border-white border-opacity-5 flex flex-col px-4 pb-3 text-white";
        settingsWrapper.id = "dopechat-settingswrapper";
        elements.insertBefore(settingsWrapper, elements.firstChild);
    }
};

const addDopeChatSettingsWrapper: Function = (): void => {
    let wrapperDiv: HTMLElement | any = document.getElementById(
        "dopechat-settingswrapper",
    );
    if (!wrapperDiv) {
        let observeForPop: MutationObserver = new MutationObserver(
            (mutations: MutationRecord[]): void => {
                mutations.forEach((): void => {
                    try {
                        dopeChatSettingsWrapper();
                    } catch {}
                });
            },
        );
        observeForPop.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }
};

export default addDopeChatSettingsWrapper;
