import displayDate from './displayDate.js';
import addBtn from './addBtn.js';

export default function bottomSection() {
    const element = document.createElement('div');
    element.id = "bottomSection";

    element.appendChild(displayDate());
    element.appendChild(addBtn());

    return element;
};