const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function handleLoginSubmit(event) {
    //console.dir(loginInput); //input의 내용을 가져오기 위한 property 확인
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", handleLoginSubmit);
link.addEventListener("click", handleLinkClick);

//handleLinkClick({Information about the event that just happened});
//방금 일어난 event에 대한 정보를 담은 object를 JS가 기본적으로 제공하고, 첫번째 인자로 주어짐
