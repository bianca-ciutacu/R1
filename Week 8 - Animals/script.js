`use strict`;

const getPhoto = document.querySelector(`#getPhoto`);
const myAnimals = document.querySelector(`#myAnimals`);
const myDiv = document.getElementById(`myDiv`);
const resetBtn = document.getElementById(`repeatAction`);

getPhoto.addEventListener(`click`, returnPhoto);

function returnPhoto() {
  let myOption = myAnimals.options[myAnimals.selectedIndex].value;
  if (myOption === `foxPhoto`) {
    getMyFoxPhoto();
  } else if (myOption === `dogPhoto`) {
    getMyDogPhoto();
  } else {
    getMyCatPhoto();
  }
}

function getMyDogPhoto() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data.message);
      const html = `<div id='removeThis'>
  <img alt='Error, please refresh!' class='newPic' src='${data.message}'/>
  <p>Have a great day!</p>
  </div>`;
      myDiv.insertAdjacentHTML(`beforeend`, html);
      document.getElementById(`getPhoto`).classList.add(`hidden`);
    });
}
function getMyCatPhoto() {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(response => response.json())
    .then(function (data) {
      [catData] = data;
      console.log(catData.url);
      const html = `<div id='removeThis'>
  <img alt='Error, please refresh!' class='newPic' src='${catData.url}'/>
  <p>Have a great day!</p>
  </div>`;
      myDiv.insertAdjacentHTML(`beforeend`, html);
      document.getElementById(`getPhoto`).classList.add(`hidden`);
    });
}
function getMyFoxPhoto() {
  fetch(`https://randomfox.ca/floof/`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data.image);
      const html = `<div id='removeThis'>
  <img alt='Error, please refresh!' class='newPic' src='${data.image}'/>
  <p>Have a great day!</p>
  </div>`;
      myDiv.insertAdjacentHTML(`beforeend`, html);
      document.getElementById(`getPhoto`).classList.add(`hidden`);
    });
}

function doItAgain() {
  document.getElementById(`removeThis`).remove();
  document.getElementById(`getPhoto`).classList.remove(`hidden`);
}

resetBtn.addEventListener(`click`, doItAgain);
