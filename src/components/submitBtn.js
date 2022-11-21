import { createTask } from "./todos";

export default function submitBtn(label, id) {
    const element = document.createElement("button");
    element.id = id;
    element.innerText = label;

    element.addEventListener('click', () => { createTask(); });

    return element;
};