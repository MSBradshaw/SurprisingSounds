// Saves options to chrome.storage
function save_options() {
    var checked_option = document.getElementById('always_noise').checked;
    chrome.storage.sync.set({
        'takeoverEnabled': checked_option
    }, function() {
        console.log('Saving');
        console.log(checked_option);
        //status.textContent = 'Options saved.';
        // setTimeout(function() {
        //     status.textContent = '';
        // }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get(['takeoverEnabled'], function(items) {
        console.log(items.takeoverEnabled);
        document.getElementById('always_noise').checked = items.takeoverEnabled;
    });
}

window.onload = function() {
  restore_options();
  document.getElementById('saveit').addEventListener('click',
      save_options);
};
// console.log(document.getElementById('#saveit'))
// console.log(document.getElementById('saveit'))
//.addEventListener('click',function(){console.log('McClick');});
