console.log("matches1.js");

function applyMatches1State(enabled) {
  let element = document.querySelector('.central-textlogo__image.sprite.svg-Wikipedia_wordmark');
  if (element) {
    element.style.transform = enabled ? "scale(1.5)" : "scale(1)";
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message === "toggle_matches1") {
    chrome.storage.sync.get("matches1Enabled", ({ matches1Enabled }) => {
      applyMatches1State(!matches1Enabled);
      chrome.storage.sync.set({ matches1Enabled: !matches1Enabled });
    });
  }
});

chrome.storage.sync.get("matches1Enabled", ({ matches1Enabled }) => {
  if (matches1Enabled) {
    applyMatches1State(true);
  }
});