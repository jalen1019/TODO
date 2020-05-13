// Custom element defintions
class UserNote extends HTMLElement {
    constructor() {
        super();

        // Define shadow root
        let shadow = this.attachShadow({mode: "closed"});

        // Define custom elements to be attached
        const user_input_field = document.createElement("input");
            user_input_field.setAttribute("type", "text");

        shadow.appendChild(user_input_field);
    }
    
    // Event Handlers
    
    
    // Utility Methods
    toggle() {
        console.log("Note has been toggled!");
        if (this.state) {
            
        } else {

        }
        this.state = !this.state;
    }
    
} customElements.define("user-note", UserNote);