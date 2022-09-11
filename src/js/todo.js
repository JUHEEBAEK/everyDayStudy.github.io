const addBtn = document.querySelector(".addBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todoList");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    button.innerText = "X";
    button.classList.add("delBtn");
    button.addEventListener("click", delTodoItem);

    span.innerText = newTodo;
    li.classList.add("todoItem");
    todoList.appendChild(li);
    todoInput.value = "";
}

function addTodoItem() {
    console.log("click");
    const newTodo = todoInput.value;

    // localStorage.setItem("todo", toInput);
    paintTodo(newTodo);
}

function delTodoItem(event) {
    console.log("del", event);
    const li = event.target.parentElement;
    li.remove();

}

addBtn.addEventListener("click", addTodoItem);
