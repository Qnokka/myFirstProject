const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
//중요한 정보를 담은 게 아닌 경우 대문자로 작성
const USERNAME_KEY = "username";
//무조건 같아야 하는 string은 대문자 변수로 저장

function handleLoginSubmit(event) {
    //console.dir(loginInput); //input의 내용을 가져오기 위한 property 확인
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //username을 DB에 저장해주는 구문
    //localStorage. setItem/getItem/removeItem을 통해 DB 작업
    paintGrettings(username);
}

function paintGrettings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    //show the greetings
    paintGrettings(savedUsername);
}