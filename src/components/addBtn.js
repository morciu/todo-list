import { displayModal } from "./modalControl";

export default function addBtn() {
    const element = document.createElement('button');
    element.id = "addBtn";
    element.innerText = "Add";

    //events for controlling modal
    element.addEventListener('click', () => {displayModal()});

    return element;
};