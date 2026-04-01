function myfunction() {
    const div = document.getElementById("todo-input").value;
    const element = document.createElement("li");
    element.textContent = div + " ";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        element.remove();
    };
    element.appendChild(deleteButton);

    document.getElementById("todo-list").appendChild(element);
}