let ipcRenderer = require('electron');

// Custom element defintions
class NewNote extends HTMLInputElement {
    constructor() {
        super();

        // Define the new note attributes
        this.id = "note-text";
        this.type = "text";
    }
}

// Handlers

// Add note handler 
var addNoteHandler = function() {
    // define attributes for input tag
    var inputField = document.createElement("input", { is: "NewNote" });

    // add the newly created element before add-note button
    addNote.parentElement.insertBefore(inputField, addNote);
}

// Event listeners
var addNote = document.getElementById("add-note");
addNote.addEventListener("click", addNoteHandler, false);