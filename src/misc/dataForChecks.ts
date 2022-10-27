export const appToggles: {
    name: string;
    cssValue: string;
    display: string;
}[] = [
    { name: "chatRepliesHide", cssValue: "--hidereplies", display: "flex" },
    {
        name: "chatThreeDots",
        cssValue: "--chatthreedots",
        display: "inline-block",
    },
    { name: "chatCommentReacts", cssValue: "--chatreacts", display: "block" },
    {
        name: "chatLikeReplyCheck",
        cssValue: "--likereply",
        display: "inline-block",
    },
    {
        name: "chatTopBarCheck",
        cssValue: "--chattopbardisplay",
        display: "block",
    },
];

export const storageSetValueSettingsData: (
    | {
          name: string;
          cssValue: string;
          value: string;
          secondValue?: undefined;
      }
    | {
          name: string;
          cssValue: string;
          value: string;
          secondValue: string;
      }
)[] = [
    { name: "chatBackground", cssValue: "--chatbg", value: "#18181b" },
    { name: "chatTextSize", cssValue: "--textsize", value: "13px" },
    { name: "chatTextColor", cssValue: "--textcolor", value: "#FFF" },
    { name: "topbarColor", cssValue: "--topbarcolor", value: "#18181b" },
    {
        name: "chattopbarColor",
        cssValue: "--chattopbarcolor",
        value: "#18181b",
    },
    { name: "changefont", cssValue: "--fontfamily", value: "Helvetica" },
    { name: "changeChatWidth", cssValue: "--chatwidth", value: "354px" },
    {
        name: "hideChatProfilePictures",
        cssValue: "--pfpdisplay",
        value: "block",
        secondValue: "none",
    },
    {
        name: "timestampCheck",
        cssValue: "--timestamps",
        value: "none",
        secondValue: "block",
    },
];
