import { hideModal } from "./modalControl";

export default function createModal() {
    const element = document.createElement('div');
    element.id = "modal";

    const modalContent = document.createElement('div');
    modalContent.id = "modalContent";
    modalContent.innerText = "This here is a modal!";

    element.appendChild(modalContent);

    window.onclick = function(event) {
        if (event.target == element) {
            hideModal();
        }
    }

    return element;
};