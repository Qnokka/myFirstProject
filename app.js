const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
//중요한 정보를 담은 게 아닌 경우 대문자로 작성

function handleLoginSubmit(event) {
    //console.dir(loginInput); //input의 내용을 가져오기 위한 property 확인
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    //username을 DB에 저장해주는 구문
    //localStorage. setItem/getItem/removeItem을 통해 DB 작업
    greeting.innerText = `Hello, ${username} Keep Going`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", handleLoginSubmit);