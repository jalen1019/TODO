// Custom element defintions
class UserNote extends HTMLInputElement {
    constructor() {
        super();

        // Define the new note attributes
        this.id = "note-text";
        this.type = "text";
    }
} customElements.define("user-note", UserNote);