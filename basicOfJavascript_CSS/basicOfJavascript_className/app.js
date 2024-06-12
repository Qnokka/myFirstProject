const h1 = document.querySelector("div.hello:first-child h1");

function handelh1Click(){

    const clickedClass = "clicked";

    if(h1.className===clickedClass) {
        h1.className="";
    } else {
        h1.className=clickedClass;
    }
    /*
    className : 이전 class들은 상관하지 않고 모든 것을 교체함
    classList : class들의 목록으로 작업할 수 있게끔 허용해줌
    */
    
}
/* 
STEP 정리요약
1. Eleements를 읽어라
2. Event를 Listen해라
3. 그 Event에 반응해라
- 반응이란, 무언가 결과를 보여주거나 감추거나 색깔을 바꾸는 등의 작용을 의미함
*/

h1.addEventListener("click", handelh1Click); //HTML의 Element


