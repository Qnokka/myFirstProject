const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.getElementById("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; ///빈 값으로 시작되지 않기 위해 변수로 변경

function saveToDOs() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDoHandler(event) {
    const li = event.target.closest('li');
    if (li) {
        li.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDOs();
    }
}

function paintToDO(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //고유 ID 설정
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("todo-item"); //스타일링을 위한 클래스 추가
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "🗑️";
    btn.classList.add("todo-button"); //스타일링을 위한 클래스 추가
    btn.addEventListener("click", deleteToDoHandler);
    divWrapper.appendChild(span); //텍스트 추가
    divWrapper.appendChild(btn);  //삭제 버튼 추가
    li.appendChild(divWrapper);   //<li>요소에 <div>추가
    toDoList.appendChild(li);     //To-Do 리스트에 <li>요소 추가
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
//console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //localStorage에 저장된 Array 값을 저장
    //parsedToDos.forEach((item) => console.log("this is turn of ", item));
    parsedToDos.forEach(paintToDO);
}
