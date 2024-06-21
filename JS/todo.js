const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDO(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
    //JS에서 HTML 생성하는 방식
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDO(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
