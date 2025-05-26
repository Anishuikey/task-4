const stats = document.getElementById("stats");
const blockList = document.getElementById("blockList");
const siteInput = document.getElementById("siteInput");

chrome.storage.local.get(["timeData", "blocklist"], ({ timeData, blocklist }) => {
  stats.innerHTML = "";
  for (let site in timeData || {}) {
    const min = Math.round(timeData[site] / 60);
    stats.innerHTML += `<li><strong>${site}</strong>: ${min} min</li>`;
  }

  blockList.innerHTML = "";
  (blocklist || []).forEach(site => {
    blockList.innerHTML += `<li>${site}</li>`;
  });
});

document.getElementById("addBlock").onclick = () => {
  const site = siteInput.value.trim();
  if (!site) return;
  chrome.storage.local.get(["blocklist"], ({ blocklist }) => {
    const updated = [...new Set([...(blocklist || []), site])];
    chrome.storage.local.set({ blocklist: updated }, () => location.reload());
  });
};
