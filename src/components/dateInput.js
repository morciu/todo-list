import { format } from "date-fns";

export default function dateInput(label, id) {
    const element = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = label;
    titleLabel.setAttribute("for", id);

    const dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.id = id;
    dateInput.value = format(new Date(), "yyyy-mm-dd");

    element.appendChild(titleLabel);
    element.appendChild(dateInput);

    return element;
};