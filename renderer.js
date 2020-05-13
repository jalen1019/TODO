let ipcRenderer = require('electron');

// Element selectors
var createNote = document.getElementById("add-note");
var addNoteContainer = document.getElementById("add-note-container");

// Handlers
// Add note handler 
var addNoteHandler = function() {
    // Check if there is a note currently open
    if (addNoteContainer.hasChildNodes()) {
        return;
    }
    
    // Define attributes for input tag
    var user_note = document.createElement("user-note");

    // Add the newly created element before add-note button
    addNoteContainer.appendChild(user_note, addNoteContainer);
}

// Event listeners
createNote.addEventListener("click", addNoteHandler, false);