const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleLoginSubmit(event) {
    //console.dir(loginInput); //input의 내용을 가져오기 위한 property 확인
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", handleLoginSubmit);