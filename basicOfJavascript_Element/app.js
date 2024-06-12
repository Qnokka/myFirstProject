document.h1 = "Let's START basic of javascript!";

const h1 = document.getElementById("title"); 
//id가 title인 HTML Element를 h1 변수에 저장

console.dir(h1);
//h1의 속성을 확인하기 위해 console에 출력

h1.innerText = "Got You!"
//h1(HTML Element)의 innerText 속성을 변경 => 로드될 때 적용 (화면상에 Got You! 출력)

console.log(h1.id);
//h1(HTML Element)의 id 값 출력 => title
console.log(h1.className);
//h1(HTML Element)의 class 값 출력 => className