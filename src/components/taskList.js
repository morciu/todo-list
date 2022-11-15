export default function taskList() {
    const element = document.createElement('ul');
    element.id = "taskList";

    const task1 = document.createElement('li');
    task1.innerText = "task 1";
    const task2 = document.createElement('li');
    task2.innerText = "task 2";

    element.appendChild(task1);
    element.appendChild(task2);

    return element;
};