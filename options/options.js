function saveOptions() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;

  var prefs = {
    firstName: firstName,
    lastName: lastName
  }

  console.log(prefs);

  chrome.storage.sync.set({hbPrefs: prefs}, () => {console.log('Saved!', prefs);});
}



document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('save-button');
  // onClick's logic below:
  link.addEventListener('click', function() {
    saveOptions();
  });
});