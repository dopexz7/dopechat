const seperateChatMessages = () => {
  chrome.storage.local.get(['messageSeperate', 'chatSplittingEnable'], (r) => {
    if (r.chatSplittingEnable === true && r.messageSeperate) {
      document.documentElement.style.setProperty(
        '--messageSeparateBorder',
        '2px solid' + r.messageSeperate
      );
    } else {
      document.documentElement.style.setProperty(
        '--messageSeparateBorder',
        '0'
      );
    }
  });
};
export default seperateChatMessages;
