let ipcRenderer = require('electron');

var addNote = document.getElementById("add-note");

addNote.addEventListener("click", () => {
    console.log("add-note button clicked...");

    console.log("Creating input field...")
    // Define attributes for input tag
    var inputField = document.createElement("input");
        inputField.id = "note-text";
        inputField.type = "text";

    // Append inputField to add-note-container
    var addNoteContainer = document.getElementById("add-note-container");
    addNoteContainer.appendChild(inputField);
});