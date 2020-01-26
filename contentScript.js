d=document;


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  console.log(message)
  if (message.txt === "hello") {
    var inputs=d.getElementsByTagName("input");    //look for all inputs
       //var fields = ['first_name', 'first-name', 'last_name', 'email','phone'];

       //below defines lists of tags for every fields
       var firstName = [prefs.hbPrefs.firstNameOptions.split(',')];
       var lastName = [prefs.hbPrefs.lastNameOptions.split(',')];
       var email = [prefs.hbPrefs.emailOptions.split(',')];
       var phone = [prefs.hbPrefs.phoneOptions.split(',')];
       var linkedin = [prefs.hbPrefs.linkedinOptions.split(',')];
       var github = [prefs.hbPrefs.githubOptions.split(',')];
       var portfolio = [prefs.hbPrefs.portfolioOptions.split(',')];
       var portalUser = [prefs.hbPrefs.portalUserOptions.split(',')];
       var portalPass = [prefs.hbPrefs.portalPassOptions.split(',')];
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
            if (phone.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.phone;
            }
            if (linkedin.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.linkedin;
            }
            if (github.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.github;
            }
            if (portfolio.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.portfolio;
            }
            if (portalUser.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.portalUser;
            }
            if (portalPass.indexOf(input.id)!=-1){
              d.getElementById(inputs[i].id).value=prefs.hbPrefs.portalPass;
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
