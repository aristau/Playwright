//This script defines what the extension does

//Fill in the first name textbox on a website with the firstName that was saved in the extension
chrome.storage.sync.get(["extensionFirstName"]).then((result) => {
    console.log("Extension First Name is " + result.extensionFirstName);
    var extensionFirstName = result.extensionFirstName;
    if(typeof extensionFirstName !== "undefined"){
        document.getElementById('firstName').value = extensionFirstName;
    }
});

//Todo: You have to refresh after saving the name in the extension. 










