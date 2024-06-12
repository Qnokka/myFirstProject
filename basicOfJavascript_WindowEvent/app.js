const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);
console.dir(h1); //Elements의 내부 출력

function handelTitleClick() {
    h1.innerText = "You Clicked ME!"
    h1.style.color = "green";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS No WI-FI");
}

function handleWindowOnline() {
    alert("Ok, ALL GOOOOD!");
}

h1.addEventListener("click", handelTitleClick); //HTML의 Element
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//function을 JS에 넘겨 내가 직접 실행 버튼을 누르지 않고 눌러지게 하는 것.
//유저가 해당 이벤트를 할 경우에만 JS가 함수를 실행해주는 구조
window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)