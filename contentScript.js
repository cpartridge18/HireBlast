d=document;


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "hello") {
    var inputs = d.getElementsByTagName("input");    //look for all inputs

    chrome.storage.sync.get(["hbPrefs"], function (prefs) {
      console.log(prefs);
      for (var i = 0; i < inputs.length; i++) {   //for each input on document
        inputId = inputs[i].id;
        for (const dataId in prefs.hbPrefs) {
          console.log("data:", dataId);
          console.log("data.tags:", prefs.hbPrefs[dataId].tags);
          if (new Set(prefs.hbPrefs[dataId].tags).has(inputId)) {
            // autofill with data.content
            // d.getElementById(inputId)
            console.log("yep");
            inputs[i].value = prefs.hbPrefs[dataId].content;
          } else {
            console.log("nope");
          }
        }
      }
    });
  }
};
