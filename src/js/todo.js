const body = document.querySelector("body");
const addBtn = document.querySelector(".addBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todoList");

let todos = [];
const todosKey = "Todos";

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const newId = todos.length + 1;  

    li.appendChild(span);
    li.appendChild(button);
    li.id = newId; 

    button.innerText = "X";
    button.classList.add("delBtn");
    button.addEventListener("click", delTodoItem);

    span.innerText = newTodo;
    li.classList.add("todoItem");
    todoList.appendChild(li);

    let objTodo = {
        text: newTodo,
        id: newId
    };

    todos.push(objTodo);
    localStorage.setItem(todosKey, JSON.stringify(todos));
    todoInput.value = "";
}

function addTodoItem() {
    console.log("click");
    const newTodo = todoInput.value;
    paintTodo(newTodo);
}

function delTodoItem(event) {
    console.log("del", event.target);
    const li = event.target.parentElement;
    console.log(li);
    li.remove();

    const removeToDos = todos.filter(function (todo) { 
        return todo.id !== parseInt(li.id);
    });

    console.log("removeToDos", removeToDos);

    localStorage.setItem(todosKey, JSON.stringify(removeToDos));
    
}


function loadTodoList() {
    const storageTodos = localStorage.getItem(todosKey);
    if (storageTodos !== null) {
      const parsedToDos = JSON.parse(storageTodos); 
      console.log("parsedToDos", parsedToDos);
      parsedToDos.forEach(function (toDo) {
        paintTodo(toDo.text);
      });
    }
}

addBtn.addEventListener("click", addTodoItem);
loadTodoList();