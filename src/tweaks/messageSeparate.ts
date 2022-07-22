const seperateChatMessages: Function = (): void => {
  chrome.storage.local.get(
    ['messageSeperate', 'chatSplittingEnable'],
    (r: { [key: string]: any }): void => {
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
    }
  );
};
export default seperateChatMessages;
