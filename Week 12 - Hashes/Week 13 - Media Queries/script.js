`use strict`;
const myCanv = document.querySelector(`#myCanvas`);
const myCanvDraw = myCanv.getContext(`2d`);
myCanvDraw.beginPath();
myCanvDraw.arc(95, 50, 40, 0, 2 * Math.PI);
myCanvDraw.stroke();

const mySecondCanv = document.querySelector(`#mySecondCanvas`);
const mySecondCanvDraw = mySecondCanv.getContext(`2d`);
mySecondCanvDraw.font=`35px Arial`;
mySecondCanvDraw.fillText(`Hi!`,80,60);

var firstName = "John";
var fullName = firstName + " " + lastName;
var lastName = "Doe";

console.log(fullName);
