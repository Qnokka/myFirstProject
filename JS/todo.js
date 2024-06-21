const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.getElementById("#todo-form input");
const toDoLIst = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
