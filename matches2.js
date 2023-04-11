console.log("matches2.js");

function applyMatches2State(enabled) {
  let element = document.querySelector('strong.jsl10n.localized-slogan');
  if (element) {
    element.style.fontSize = enabled ? "1.8em" : "1em";
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message === "toggle_matches2") {
    chrome.storage.sync.get("matches2Enabled", ({ matches2Enabled }) => {
      applyMatches2State(!matches2Enabled);
      chrome.storage.sync.set({ matches2Enabled: !matches2Enabled });
    });
  }
});

chrome.storage.sync.get("matches2Enabled", ({ matches2Enabled }) => {
  if (matches2Enabled) {
    applyMatches2State(true);
  }
});