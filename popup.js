
d = document;

d.addEventListener('DOMContentLoaded', function() {

   //var fillPagebutton = d.getElementById('autofill');

//chrome.browserAction.onClicked.addListener(buttonClicked);

d.getElementById('autofill').addEventListener('click', buttonClicked);


function buttonClicked(tab) {
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, function(tabs) {

    console.log("run")
    let msg = {
      txt: "hello"
    }
    chrome.tabs.sendMessage(tabs[0].id, msg);
})
}


   // fillPagebutton.addEventListener('click', function() {
   //    console.log("fuckmejerry")

   //    chrome.runtime.sendMessage({
   //      action:'runContentScript'F
   //    });
  //   chrome.tabs.getSelected(null, function(tab) {
  //     var inputs=d.getElementsByTagName("input");    //look for all inputs
  //     var fields = ['first_name', 'last_name', 'email'];

  //     print("runs");
  //     for(var i = 0; i < inputs.length; i++){   //for each input on document

  //           var input=inputs[i];     //look at whatever input

  //           if(input.type=="text" && (fields.indexOf(input.id)!=-1)){
  //               d.getElementById(inputs[i].id).value="TEST";
  //               //d.forms[0].submit();
  //           }
  //      }});
     // });

   d.getElementById("options-button").addEventListener('click', function() {
     if (chrome.runtime.openOptionsPage) {
       chrome.runtime.openOptionsPage();
     } else {
       window.open(chrome.runtime.getURL('options.html'));
     }
   });

   });
