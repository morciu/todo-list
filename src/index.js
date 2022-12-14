import './style.css';
import contentHeader from './components/header.js';
import contentBody from './components/body.js';
import {Todo, addTodos} from './components/todos.js';
import createModal from './components/createModal.js';

function component() {
    // create main content div
    const content = document.createElement('div');
    content.id = "content"

    // load header
    content.appendChild(contentHeader());

    // load body
    content.appendChild(contentBody());


    return content;
};

document.body.append(component());

// load modal
document.body.append(createModal());