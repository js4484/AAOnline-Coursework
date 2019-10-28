const addTodo = function () {

    let todoArray;

    const checkStorage = function() {

        const toCheck = localStorage.getItem("todoArr");
        console.log(toCheck);
        if (toCheck !== null) {
            debugger;
            todoArray = JSON.parse(localStorage.getItem("todoArr"));
        } else {
            todoArray = [];
        }
    };
    console.log(todoArray);
    
    

    // const todoArr = localStorage.getItem("todoArr") || [];
    const ulEl = document.getElementsByClassName('todos');
    
    const formEL = document.getElementsByClassName('add-todo-form');
    formEL[0].addEventListener('submit', (event) => {
        checkStorage();

        event.preventDefault();
        const formValue = document.getElementById('add-todo').value;
        const liEl = document.createElement("li");
        const inputEl = document.createElement("input");

        const todo = {text: formValue, done: false}

        // inputEl.setAttribute("type", "checkbox");
        // inputEl.setAttribute("checked", "true");
        // const labelEl = document.createElement("label");
        // labelEl.innerHTML = formValue;
        // liEl.append(inputEl);
        // liEl.append(labelEl);

        todoArray.push(todo);
        populateList(todoArray);
        document.getElementById('add-todo').value = "";
        debugger;
        localStorage.setItem("todoArr", JSON.stringify(todoArray))
    });

    const populateList = function(todoArray){
      inputArr.forEach((liEl)=>{
        ulEl[0].append(liEl);
      });
    };
    
    
    

    // put arr in storage
   
};

module.exports = addTodo;