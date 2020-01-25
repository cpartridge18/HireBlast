  chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // if (msg.action === "fillFields") {
      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="orange"'
      })

    // }
  });

