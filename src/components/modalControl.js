function displayModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "block";
};

function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

export { displayModal, hideModal }