import { hideModal } from "./modalControl";
import modalContent from "./modalContent";

export default function createModal() {
    const element = document.createElement('div');
    element.id = "modal";

    element.appendChild(modalContent());

    // event to close modal
    window.onclick = function(event) {
        if (event.target == element) {
            hideModal();
        }
    }

    return element;
};