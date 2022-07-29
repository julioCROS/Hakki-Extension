"use script";

const onlineColor = "#02d139";
const offlineColor = "#de040f";

let checkbox = document.getElementById("checkbox");
let state = document.getElementById("state");

checkbox.addEventListener("change", checkState);

chrome.storage.local.get("online", function(data) {
  if (data.online) {
    console.log("Online");
    checkbox.checked = true;
    state.innerHTML = "Online";
    state.style.color = onlineColor;
  } else {
    console.log("Offline");
    checkbox.checked = false;
    state.innerHTML = "Offline";
    state.style.color = offlineColor;
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("Refresh");
    state.innerHTML = "Offline";
    state.style.color = offlineColor;
    checkbox.checked = false;
    chrome.storage.local.set({online: false});
    checkState();
});


function checkState() {
  if (checkbox.checked) onlineMode();
  else  offlineMode();
}

function onlineMode() {
  state.innerHTML = "Online";
  state.style.color = onlineColor;
  chrome.storage.local.set({online: true});
  chrome.tabs.query({active:true,windowType:"normal", currentWindow: true}, function(tabs){ 
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['/src/script.js'],
    });
  });
}

function offlineMode() {
  state.innerHTML = "Offline";
  state.style.color = offlineColor;
  chrome.storage.local.set({online: false});
  chrome.tabs.query({active:true,windowType:"normal", currentWindow: true}, function(tabs){ 
    chrome.tabs.reload(tabs[0].id);
  });
}
