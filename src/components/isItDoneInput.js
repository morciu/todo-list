export default function isItDone() {
    const element = document.createElement("div");

    const doneLabel = document.createElement("label");
    doneLabel.setAttribute("for", "doneInput");
    doneLabel.innerText = "Is it done?"

    const doneInput = document.createElement("input");
    doneInput.type = "checkbox";
    doneInput.id = "doneInput";

    doneLabel.appendChild(doneInput);
    element.appendChild(doneLabel);

    return element;
};