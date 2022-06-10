`use strict`;
let defineHash;

const setHash = document.querySelector(`#setHash`);
const goBack = document.querySelector(`#goBack`);
const goForward = document.querySelector(`#goForward`);
const aboutPage = document.querySelector(`#aboutPage`);

aboutPage.addEventListener(`click`, aboutFunc);
goBack.addEventListener(`click`, goBackFunc);
goForward.addEventListener(`click`, goForwardFunc);
setHash.addEventListener(`click`, hashSetter);
window.addEventListener(`popstate`, e => {
  console.log(`The user navigated through history`);
});
function aboutFunc() {
  history.pushState(null, null, `about`);
  //Aici am putea folosi replaceState
}
function goForwardFunc() {
  history.forward();
}
function goBackFunc() {
  history.back();
}
function hashSetter() {
  defineHash = document.querySelector(`#defineHash`).value;
  location.hash = defineHash;
  console.log(`New hash set!`);
  alert(`New #hash set!`);
}
