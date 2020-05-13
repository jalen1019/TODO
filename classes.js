// Custom element defintions
class UserNote extends HTMLElement {    
    constructor() {
        super();
        
        // Define shadow root
        let shadow = this.attachShadow({mode: "open"});

        // Define elements to be attached
        const note_title = document.createElement("input");
            note_title.setAttribute("type", "text");
            note_title.setAttribute("id", "note-title");
            note_title._state = false;
            
        const note_body = document.createElement("textarea");
            note_body.setAttribute("id", "note-body");
            note_body._state = false;

        const note_save = document.createElement("button");
            note_save.innerText = "Save";
            note_save.setAttribute("id", "note-save");
            note_save.hidden = true;
            
        // Attach elements to shadow root 
        shadow.appendChild(note_title);
        shadow.appendChild(note_body);
        shadow.appendChild(note_save);

        // Create event handlers
        // Change properties based on whether text is inside note
        note_title.addEventListener("input", this.noteTitleHandler);
        note_body.addEventListener("input", this.noteBodyHandler);

        // Hide or show save button based on states of input boxes
        note_title.addEventListener("input", this.userInputHandler);
        note_body.addEventListener("input", this.userInputHandler);
    }

    noteTitleHandler() {
        if (this.value != "") {
            this._state = true;
        } else {
            this._state = false;
        }
    }

    noteBodyHandler() {
        if (this.value != "") {
            this._state = true;
        } else {
            this._state = false;
        }
    }
    
    // userInputHandler handles the presence of input within the text input boxes
    userInputHandler() {
        let note_save = this.parentNode.querySelector("#note-save");
        let note_title_state = this.parentNode.querySelector("#note-title")._state;
        let note_body_state = this.parentNode.querySelector("#note-body")._state;

        if (this.value != "") {
            this._state = true;
        } else {
            this._state = false;
        }
        
        if (note_title_state || note_body_state) {
            note_save.hidden = false;
        } else {
            note_save.hidden = true;
        }
    }

} customElements.define("user-note", UserNote);