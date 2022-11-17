import newTodoForm from './newTodoForm.js'

export default function modalContent() {
    const element = document.createElement('div');
    element.id = "modalContent";

    element.appendChild(newTodoForm());

    return element;
};