const h1 = document.querySelector("div.hello:first-child h1");

function handelh1Click(){

    //toggle : className이 존재하는지 확인
    h1.classList.toggle("clicked");

    /*
    css에 정의된 className들로 HTML Element에서 숨기고 표시하는 방법과
    toggle을 사용하는 방법을 배움 (존재 유무에 따라 자동으로 추가/제거함)
    */
}

h1.addEventListener("click", handelh1Click); //HTML의 Element


