const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

/* Javascript를 이용하여 무언가를 가져와 HTML에 적용한 케이스만 해봄,
=> HTML을 먼저 작성 후, Javascript를 사용하여 작성한 HTML을 다뤘다는 의미...
Javascript에사 무언가를 만들어 그걸 HTML에 추가하는 예제는 해당 코드가 처음임
=> Javascript에서 이미지를(작성)생성하여 HTML에 추가하는 방법 */

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);



