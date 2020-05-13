// Custom element defintions
class UserNote extends HTMLElement {
    constructor() {
        super();

        // Define shadow root
        let shadow = this.attachShadow({mode: "closed"});

        // Define elements to be attached
        const note_title = document.createElement("input");
            note_title.setAttribute("type", "text");
            
        const note_body = document.createElement("textarea");
            note_body.setAttribute("autofocus", "true");

        // Attach elements to shadow root 
        shadow.appendChild(note_title);
        shadow.appendChild(note_body);

        // Create event handlers
        note_title.addEventListener("input", this.userInputHandler);
        note_body.addEventListener("input", this.userInputHandler);
    }
    
    // Define custom event handling
    userInputHandler() {
        
    }
    
    // Private utility Methods
    toggle() {

    }
    
} customElements.define("user-note", UserNote);