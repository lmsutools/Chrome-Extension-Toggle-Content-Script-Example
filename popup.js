const send = (message) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  };
  
  const matches1Checkbox = document.getElementById("matches1Checkbox");
  const matches2Checkbox = document.getElementById("matches2Checkbox");
  
  matches1Checkbox.onclick = () => {
    send("toggle_matches1");
  };
  
  matches2Checkbox.onclick = () => {
    send("toggle_matches2");
  };
  
  chrome.storage.sync.get(["matches1Enabled", "matches2Enabled"], ({ matches1Enabled, matches2Enabled }) => {
    matches1Checkbox.checked = matches1Enabled || false;
    matches2Checkbox.checked = matches2Enabled || false;
  });