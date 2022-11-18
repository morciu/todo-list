export default function textInput(label, id) {
    const element = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = label;
    titleLabel.setAttribute("for", id);

    const title = document.createElement('input');
    title.id = id;
    title.type = "text";

    element.appendChild(titleLabel);
    element.appendChild(title);

    return element;
};