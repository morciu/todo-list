import './style.css';

function component() {
    const element = document.createElement('div');
    element.innerText = "it's alive";

    return element;
};

document.body.append(component());