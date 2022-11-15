export default function currentProject(title="home") {
    const element = document.createElement('div');
    element.id = "currentProject";
    element.innerText = title;

    return element;
};