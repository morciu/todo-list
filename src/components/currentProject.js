export default function currentProject(title="Miscelaneous") {
    const element = document.createElement('button');
    element.id = "currentProject";
    element.innerText = title;

    return element;
};