document.addEventListener('DOMContentLoaded', function() {
  function saveOptions() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;

    var prefs = {
      firstName: firstName,
      lastName: lastName
    }

    console.log(prefs);

    chrome.storage.sync.set({"hbPrefs": prefs}, function() {
      restore_options();
      document.getElementById('save-confirmation').innerHTML = "Saved!";

      setTimeout(function() {
        document.getElementById('save-confirmation').innerHTML = "";
      }, 1000);

    });

  }


  function restore_options() {
    chrome.storage.sync.get(["hbPrefs"], function(prefs) {
      document.getElementById('first-name').placeholder = prefs.hbPrefs.firstName;
      document.getElementById('first-name').value = "";
      document.getElementById('last-name').placeholder = prefs.hbPrefs.lastName;
      document.getElementById('last-name').value = "";
    });
  }


  restore_options();

  document.getElementById('save-button').addEventListener('click', saveOptions);
});