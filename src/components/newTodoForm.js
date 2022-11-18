import dateInput from "./dateInput";
import textInput from "./textInput";
import priorityInput from "./priorityInput";

export default function newTodoForm() {
    const element = document.createElement('div');

    element.appendChild(textInput("Title", "title"));
    element.appendChild(textInput("Description", "description"));
    element.appendChild(dateInput("Due Date", "date"));
    element.appendChild(priorityInput());

    return element;
};