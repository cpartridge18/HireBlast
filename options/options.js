document.addEventListener('DOMContentLoaded', function() {
  // Saves options.
  function saveOptions() {
    chrome.storage.sync.get(["hbPrefs"], function(oldPrefs) {
      var newPrefs = {};

      var inputs = document.getElementsByTagName("input");
      for(var i=0; i<inputs.length; i++) {
        var id = inputs[i].id;
        var oldValue = oldPrefs.hbPrefs[id];

        // Set the new pref to the new value, unless the new value was empty, in which case set it to the old value.
        newPrefs[id] = inputs[i].value || oldValue;
      }

      chrome.storage.sync.set({"hbPrefs": newPrefs}, function() {
        restore_options();
        showSaveMessage();
      });
    });
  }


  // (All frontend) turns pref content to placeholder.
  function restore_options() {
    chrome.storage.sync.get(["hbPrefs"], function(prefs) {
      var inputs = document.getElementsByTagName("input");
      for(var i=0; i<inputs.length; i++) {
        var id = inputs[i].id;
        var oldPrefValue = prefs.hbPrefs[id];

        if (oldPrefValue == undefined) {
          oldPrefValue = "";
        }

        inputs[i].placeholder = oldPrefValue;
        inputs[i].value = "";
      }
    });
  }


  // Shows the save message for 1 second.
  function showSaveMessage() {
    document.getElementById('save-confirmation').innerHTML = "Saved!";
    setTimeout(function() {
      document.getElementById('save-confirmation').innerHTML = "";
    }, 1000);
  }

  restore_options();

  document.getElementById('save-button').addEventListener('click', saveOptions);
});