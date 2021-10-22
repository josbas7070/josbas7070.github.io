/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world hello !';
let myVariable;
myVariable='333';
myVariable;
myHeading.textContent= myVariable;
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4,2);
  alert('resultmultiply:'+ String( multiply(4.3)));*/
  
  /* Events -- on-click */
 /* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
/* these are equivalent */
/*let myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('Ouch! Stop poking me - second way !');
};*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/COUCOU.JPG') {
      alert('Ouch! Stop poking me - Before Christo !');
      myImage.setAttribute('src','images/CHRISTO.JPG');
    } else {
      alert('Ouch! Stop poking me - Before Coucou !');

      myImage.setAttribute('src','images/COUCOU.JPG');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter the Title');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = ' ' + myName;
  }
}/*if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}*/
myButton.onclick = function() {
  setUserName();
}












