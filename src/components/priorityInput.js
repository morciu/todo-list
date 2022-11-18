export default function priorityInput() {
    const element = document.createElement("div");

    const elementLabel = document.createElement("span");
    elementLabel.innerText = "Priority";

    // Low Priority
    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "lowPriority");
    lowLabel.innerText = "Low";

    const lowInput = document.createElement("input");
    lowInput.type = "radio";
    lowInput.id = "lowPriority";
    lowInput.name = "priority";
    lowInput.checked = "checked";

    lowLabel.appendChild(lowInput);

    // Medium Priority
    const mediumLabel = document.createElement("label");
    mediumLabel.setAttribute("for", "mediumPriority");
    mediumLabel.innerText = "Medium";

    const mediumInput = document.createElement("input");
    mediumInput.type = "radio";
    mediumInput.id = "mediumPriority";
    mediumInput.name = "priority";

    mediumLabel.appendChild(mediumInput);

    // High Priority
    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "highPriority");
    highLabel.innerText = "High";

    const highInput = document.createElement("input");
    highInput.type = "radio";
    highInput.id = "highPriority";
    highInput.name = "priority";

    highLabel.appendChild(highInput);

    // Append to main div
    element.appendChild(elementLabel);
    element.appendChild(lowLabel);
    element.appendChild(mediumLabel);
    element.appendChild(highLabel);

    return element;
};