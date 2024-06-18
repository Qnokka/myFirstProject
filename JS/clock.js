const clock = document.querySelector("#clock");

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000);
//두 개의 arg를 받는데 첫 번째는 실행하고자 하는 함수, 두 번째는 호출되는 함수의 간격(단위 : ms)
