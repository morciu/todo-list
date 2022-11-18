import dateInput from "./dateInput";
import textInput from "./textInput";

export default function newTodoForm() {
    const element = document.createElement('div');

    element.appendChild(textInput("Title", "title"));
    element.appendChild(textInput("Description", "description"));
    element.appendChild(dateInput("Date", "date"));

    return element;
};