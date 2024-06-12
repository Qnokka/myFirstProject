const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1.style.color); //GET : ""
h1.style.color = "green";    //SET
console.log(h1.style.color); //GET : green


function handelh1Click(){

    const currentColor = h1.style.color; //GETER
    let newColor;                       //SETTER

    if(currentColor === "green"){
        newColor = "tomato"
    } else {
        newColor = "green"
    }
    h1.style.color = newColor;
    console.log(h1.style.color); //GET  
}
/*
Elements의 Style을 Javascript에서 변경하는 것을 선호하지 않음
Javascript는 HTML과 상호작용을 만들어내는 것에 적합한 언어임!
*/

h1.addEventListener("click", handelh1Click); //HTML의 Element


