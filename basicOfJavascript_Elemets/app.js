const hellos = document.getElementsByClassName("hello");
console.log("Use getElementByClassName");
console.log(hellos);

const h1 = document.getElementsByTagName("h1");
console.log("Use getElementByTagName");
console.log(h1);
//className과 TagName으로도 document에 접근이 가능

const h1Select = document.querySelector(".hello h1");
console.log("Use querySelector");
console.log(h1Select);

const h1SelectAll = document.querySelectorAll(".hello h1");
console.log("Use querySelectorAll");
console.log(h1SelectAll);
//JS에서 css처럼 document 내에서 Element(s)를 가져오는 방법

//이 방법들은 많은 양의 Elements를 가져오는 것에 지나지 않음