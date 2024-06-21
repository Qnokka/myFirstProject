const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function saveToDO() {
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function paintToDO(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDos.push(newTodo);
    toDoInput.value = "";
    paintToDO(newTodo);
    saveToDO();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
