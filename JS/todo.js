const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveToDOs() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
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
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDO(newTodo);
    saveToDOs();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is turn of ", item));
}
