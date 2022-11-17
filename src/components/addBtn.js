import displayModal from "./displayModal";

export default function addBtn() {
    const element = document.createElement('button');
    element.id = "addBtn";
    element.innerText = "Add";

    element.addEventListener('click', () => {displayModal()});

    return element;
};