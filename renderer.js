let ipcRenderer = require('electron');

// Element selectors
var addNote = document.getElementById("add-note");
var addNoteContainer = document.getElementById("add-note-container");

// Handlers
// Add note handler 
var addNoteHandler = function() {
    // Define attributes for input tag
    var user_note = document.createElement("user-note");

    // Add the newly created element before add-note button
    addNoteContainer.insertBefore(user_note, addNote);
}

// Event listeners
addNote.addEventListener("click", addNoteHandler, false);