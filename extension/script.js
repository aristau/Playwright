//Adds on an on clck listener to the save button in the extension once the button has loaded
document.addEventListener('DOMContentLoaded', () => {
    const extensionSaveBtn = document.getElementById('extensionSaveBtn')
    if(extensionSaveBtn){
        document.getElementById('extensionSaveBtn').addEventListener('click', saveData);
    }
    else{
        console.log('Extension Save Btn not found');
    }
});

//Saves data entered into extension into Chrome local storage when save button is pressed
function saveData(){
    console.log("Saving data from extension into Chrome local storage");
    var extensionFirstName = document.getElementById('extensionFirstName');
    chrome.storage.sync.set({'extensionFirstName': extensionFirstName.value}, function() {
        console.log('First name was saved from extension into Chrome storage');
    });
}