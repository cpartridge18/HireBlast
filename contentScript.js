d=document;


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  console.log(message)
  if (message.txt === "hello") {
    var inputs=d.getElementsByTagName("input");    //look for all inputs
       //var fields = ['first_name', 'first-name', 'last_name', 'email','phone'];
       var firstName = prefs.hbPrefs.firstNameOptions;
       var lastName = prefs.hbPrefs.lastNameOptions;
       var email = prefs.hbPrefs.emailOptions;
       var phone = prefs.hbPrefs.phoneOptions;

       //LinkedIn,GitHub,Portfolio website,Portal username,Portal password
       // {"firstName": ["first_name", "first-name"]}

      chrome.storage.sync.get(["hbPrefs"], function(prefs) {
        var ZZZZZZ = prefs.hbPrefs.firstName;
        console.log(prefs);

        for(var i = 0; i < inputs.length; i++){   //for each input on document
          var input=inputs[i];     //look at whatever input
          if(input.type == "text"){
            if (firstName.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.firstName;
            }
            if (lastName.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.lastName;
            }
            if (email.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.email;
            }
            if (phonenumber.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.phone;
            }
          }

          // if(input.type=="text" && (fields.indexOf(input.id)!=-1)){
          //   d.getElementById(inputs[i].id).value=ZZZZZZ;
          //   //d.forms[0].submit();
          // }
        }
      });

  }
}
// chrome.tabs.getSelected(null, function(tab) {

       //}});
