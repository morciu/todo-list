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

export {Todo, todos, addTodos};