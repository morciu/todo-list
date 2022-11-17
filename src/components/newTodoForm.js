export default function newTodoForm() {
    const element = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = "Title";
    titleLabel.setAttribute("for", "title");

    const title = document.createElement('input');
    title.id = "title"
    title.type = "text";

    element.appendChild(titleLabel);
    element.appendChild(title);

    return element;
};