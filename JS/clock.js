const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
//새로고침할 때 1초를 기다려야 하므로 처음엔 무조건 Load되도록
setInterval(getClock, 1000);
//setTimeout(getClock, 5000);