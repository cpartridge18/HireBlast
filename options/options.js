document.addEventListener('DOMContentLoaded', function() {
  // Saves options.
  function saveOptions() {
    chrome.storage.sync.get(["hbPrefs"], function(oldPrefs) {
      var newPrefs = {};

      var inputs = document.getElementsByTagName("input");
      for(var i=0; i<inputs.length; i++) {
        var id = inputs[i].id;
        console.log("oldprefs is:", oldPrefs);
        var oldKeyNode = oldPrefs.hbPrefs[id];
        var oldValue = "";
        if (oldKeyNode != undefined) {
          oldValue = oldKeyNode.content;
        }

        if (newPrefs[id] == undefined) {
          newPrefs[id] = {};

          if (oldKeyNode != undefined) {
            newPrefs[id] = {
              name: oldPrefs.hbPrefs[id].name,
              tags: oldPrefs.hbPrefs[id].tags
            };
          }
        }

        // Set the new pref to the new value, unless the new value was empty, in which case set it to the old value.
        newPrefs[id].content = inputs[i].value || oldValue;
      }

      chrome.storage.sync.set({"hbPrefs": newPrefs}, function() {
        restore_options();
        showSaveMessage();
      });
    });
  }

// function checkUpdate() {
//   //chrome.storage.sync.set(hbPrefs)
//   exists = false;
//   newField = d.getElementById('field-name').value;
//   tags = d.getElementById('tags').value.split(',');
//   value = d.getElementById('value').value;
//   for (const x in hbPrefs) {
//     if (x === newField) {
//       tagsKey = newField + "Options"; // for example, SSN becomes SSNOptions
//
//       // if it's undefined, we make a new tags list
//       if (typeof(hbPrefs[tagsKey] === "undefined")) {
//         hbPrefs[tagsKey] = tags
//       } else {
//         // otherwise we'll just append to the existing tags list
//         for (const y in tags) {
//           hbPrefs[tagsKey].push(y)
//         }
//       }
//
//       exists = true;
//       break
//     }
//   }
//
//   if (!exists) {
//     hbPrefs[newField] = value
//   }
//
//   chrome.storage.sync.set({"hbPrefs": hbPrefs}, function() {
//     console.log(hbPrefs);
//   });
//
//
// //restore_options()
// }

  // (All frontend) turns pref content to placeholder.
  function restore_options() {
    chrome.storage.sync.get(["hbPrefs"], function (prefs) {
      for (const id in prefs.hbPrefs) {
        var prefContent = prefs.hbPrefs[id].content;
        if (prefContent == undefined) {
          prefContent = "";
        }

        var prefTags = prefs.hbPrefs[id].tags;

        console.log("about to set placeholder with id=", id);
        document.getElementById(id).placeholder = prefContent;
        document.getElementById(id).value = "";

        customFieldsThatWeDontWantToCheck = new Set(["field-name", "tags", "value"]);
        if (!customFieldsThatWeDontWantToCheck.has(id)) {
          tagsId = id + "Tags";
          document.getElementById(tagsId).innerHTML = prefTags;
        }
      }


      //
      //   var inputs = document.getElementsByTagName("input");
      //   for(var i=0; i<inputs.length; i++) {
      //     var id = inputs[i].id;
      //     var oldPrefValue = prefs.hbPrefs[id];
      //
      //     if (oldPrefValue == undefined) {
      //       oldPrefValue = "";
      //     }
      //
      //     inputs[i].placeholder = oldPrefValue;
      //     inputs[i].value = "";
      //   }
      // });
    });
  }


  // Shows the save message for 1 second.
  function showSaveMessage() {
    document.getElementById('save-confirmation').innerHTML = "Saved!";
    setTimeout(function() {
      document.getElementById('save-confirmation').innerHTML = "";
    }, 1000);
  }



  function setDefaultData() {
    chrome.storage.sync.get(["hbPrefs"], function (prefs) {
      if (prefs === {}) {
        defaultPrefs = {
          firstName: {
            name: "First name",
            tags: ["first-name", "first_name"]
          },
          lastName: {
            name: "Last name",
            tags: ["last-name", "last_name"]
          },
          email: {
            name: "Email",
            tags: ["email"]
          },
          phoneNumber: {
            name: "Phone number",
            tags: ["phone-number", "phone_number", "phonenumber"]
          },
          linkedin: {
            name: "LinkedIn URL",
            tags: ["linkedin"]
          },
          github: {
            name: "GitHub",
            tags: ["github"]
          },
          portfolio: {
            name: "Portfolio website",
            tags: ["portfolio"]
          }
        };

        chrome.storage.sync.set({"hbPrefs": defaultPrefs}, function() {
          console.log("defaults set.");
        });
      }
    });
  }

  setDefaultData();

  restore_options();

  document.getElementById('new-field-btn').addEventListener('click', saveOptions);

  document.getElementById('save-button').addEventListener('click', saveOptions);
});