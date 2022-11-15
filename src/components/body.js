import currentProject from './currentProject.js';
import taskList from './taskList.js';
import bottomSection from './bottomSection.js';

export default function contentBody() {
    const element = document.createElement('div');
    element.id = "contentBody";

    element.appendChild(currentProject());
    element.appendChild(taskList());
    element.appendChild(bottomSection());

    return element;
};