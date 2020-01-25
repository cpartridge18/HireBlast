document.addEventListener('DOMContentLoaded', function() {
  // Saves options.
  function saveOptions() {
    chrome.storage.sync.get(["hbPrefs"], function(oldPrefs) {
      // These vars get set to new values, unless they are empty strings, in which case they get set to the old values.
      var newFirstName = document.getElementById("first-name").value || oldPrefs.hbPrefs.firstName;
      var newLastName = document.getElementById("last-name").value   || oldPrefs.hbPrefs.lastName;

      var newPrefs = {
        firstName: newFirstName,
        lastName: newLastName
      };

      chrome.storage.sync.set({"hbPrefs": newPrefs}, function() {
        restore_options();
        showSaveMessage();
      });
    });



  }


  // (All frontend) turns pref content to placeholder.
  function restore_options() {
    chrome.storage.sync.get(["hbPrefs"], function(prefs) {
      document.getElementById('first-name').placeholder = prefs.hbPrefs.firstName;
      document.getElementById('first-name').value = "";
      document.getElementById('last-name').placeholder = prefs.hbPrefs.lastName;
      document.getElementById('last-name').value = "";
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