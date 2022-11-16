import './style.css';
import contentHeader from './components/header.js';
import contentBody from './components/body.js';
import {Todo, addTodos} from './components/todos.js';

function component() {
    // create main content div
    const content = document.createElement('div');
    content.id = "content"

    // load header
    content.appendChild(contentHeader());

    addTodos(new Todo("stuff", "stuff", "stuff", "stuff", "stuff"));

    // load body
    content.appendChild(contentBody());


    return content;
};

document.body.append(component());