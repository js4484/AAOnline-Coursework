let todos = [];

let todoContainer = document.querySelector(".todo-container");
let ul = todoContainer.querySelector(".todos");

let form = todoContainer.querySelector(".add-todo-form");

const addTodo = () => {
    let input = form.querySelector("input");
    let newTodo = document.createElement("li");
    newTodo.textContent = input.value;
    newTodo.done = false;
    input.value = "";
    todos.push(newTodo);
    populateList();
};

const populateList = () => {
    todos.forEach((todo) => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        label.textContent = todo.textContent;
        todo.textContent = "";
        todo.appendChild(input);
        todo.appendChild(label);
        ul.appendChild(todo);
    });
};

form.addEventListener("submit", event => {
    event.preventDefault();
    addTodo();
});