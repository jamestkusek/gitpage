let myImage = document.querySelector('img');

myImage.onmouseover = function() {

      myImage.setAttribute('src','images/jcooper2.jpg');
}
myImage.onmouseout = function() {
  myImage.setAttribute("src","images/jcooper.jpg")
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('name, ya cunt?');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello ' + myName + ".";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName + ".";
}
myButton.onclick = function() {
  setUserName();
}
