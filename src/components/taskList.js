import todos from "./todos";

export default function taskList() {
    const element = document.createElement('ul');
    element.id = "taskList";

    todos.forEach(todo => {
        const task = document.createElement('li');
        task.innerText = todo.title;
        element.appendChild(task);
    });

    return element;
};