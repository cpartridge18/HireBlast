  chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message.action == “runContentScript”){
        chrome.tabs.executeScript({
          file: 'contentScript.js'
        });
      }
   });