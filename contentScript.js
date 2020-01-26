d=document;


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  console.log(message)
  if (message.txt === "hello") {
    var inputs=d.getElementsByTagName("input");    //look for all inputs
       var fields = ['first_name', 'last_name', 'email'];

//       print("runs");
      for(var i = 0; i < inputs.length; i++){   //for each input on document

            var input=inputs[i];     //look at whatever input

            if(input.type=="text" && (fields.indexOf(input.id)!=-1)){
                d.getElementById(inputs[i].id).value="TEST";
                //d.forms[0].submit();
            }
          }
  }
}
// chrome.tabs.getSelected(null, function(tab) {
       
       //}});