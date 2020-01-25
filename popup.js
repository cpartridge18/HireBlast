
d = document;

d.addEventListener('DOMContentLoaded', function() {
  
   var fillPagebutton = d.getElementById('autofill');

   fillPagebutton.addEventListener('click', function() {
      console.log("fuckmejerry")

      chrome.runtime.sendMessage({
        action:'fillFields'
      });
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
     });
      
  });
 

