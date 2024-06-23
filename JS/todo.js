const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; ///빈 값으로 시작되지 않기 위해 변수로 변경

function saveToDOs() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDO(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    //toDos에 text를 저장하지 않고, Object를 저장
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDO(newToDoObj);
    saveToDOs();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //localStorage에 저장된 Array 값을 저장
    //parsedToDos.forEach((item) => console.log("this is turn of ", item));
    parsedToDos.forEach(paintToDO);
}
