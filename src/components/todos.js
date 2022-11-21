import taskList from "./taskList";

class Todo {
    constructor(title, description, dueDate, priority, done) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
    }
}

let todos = [ new Todo("get this done!", "finish the dang assignment", "now", "high", false), 
    new Todo("Make it not ugly", "it looks really bad right now", "now", "high", false)];

function addTodos(todo) {
    todos.push(todo);
};

function getTodoFromInput() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("date").value;
    const priority = document.querySelector("input[name='priority']:checked").id;

    return new Todo(title, description, dueDate, priority, false);
};

function createTask() {
    const task = getTodoFromInput();
    addTodos(task);
    console.log(todos);

    // Update tasklist
    document.getElementById("taskList").replaceWith(taskList());
}

export {Todo, todos, createTask};