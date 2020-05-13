let ipcRenderer = require('electron');

// Handlers
// Add note handler 
var addNoteHandler = function() {
    // define attributes for input tag
    var inputField = document.createElement("input", { is: "UserNote" });

    // add the newly created element before add-note button
    addNote.parentElement.insertBefore(inputField, addNote);
}

// Event listeners
var addNote = document.getElementById("add-note");
addNote.addEventListener("click", addNoteHandler, false);