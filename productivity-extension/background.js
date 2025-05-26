let currentTab = null;
let startTime = Date.now();
let timeData = {};

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, (tab) => {
    switchTab(tab.url);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url) {
    switchTab(changeInfo.url);
  }
});

function switchTab(url) {
  const now = Date.now();
  if (currentTab) {
    const timeSpent = Math.floor((now - startTime) / 1000);
    timeData[currentTab] = (timeData[currentTab] || 0) + timeSpent;
  }

  currentTab = new URL(url).hostname;
  startTime = now;

  blockCheck(currentTab);
  chrome.storage.local.set({ timeData });
}

function blockCheck(hostname) {
  chrome.storage.local.get(["blocklist"], ({ blocklist }) => {
    if (blocklist?.includes(hostname)) {
      chrome.tabs.update({ url: "https://en.wikipedia.org/wiki/Productivity" });
    }
  });
}
