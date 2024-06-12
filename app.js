// const loginForm = document.getElementById("login-form");
// qlogin-form이라는 id를 가진 Element 가져오기 (div)
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// login-form Element에서 Input과 button Element 가져오기

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
    //console.dir(loginInput); //input의 내용을 가져오기 위한 property 확인
    const username = loginInput.value;
    
    //USer에 대한 유효성 검사를 실행하는 코드
    if (username === ""){
        alert("Please write your name!")

    } else if (username.length >= 15) { //string의 길이
        alert("Your name is too long.")
    } 
}

loginButton.addEventListener("click", handleLoginBtnClick);



