`use strict`;

const calculator = function () {
  let personName = document.getElementById(`personName`).value;
  let personGender = document.querySelector(`#personGender`).value;
  let personHeight = Number(document.querySelector(`#personHeight`).value);
  let personWeight = document.querySelector(`#personWeight`).value;
  let displayResults = document.getElementById(`displayResults`);
  let bmi = ((personWeight / personHeight / personHeight) * 10000).toFixed(1);
  let bmiStatus;
  if (bmi < 18.5) {
    bmiStatus = `underweight`;
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiStatus = `normal`;
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = `overweight`;
  } else {
    bmiStatus = `obese`;
  }

  displayResults.innerHTML = `${personName} | ${personGender} | ${personHeight} | BMI: ${bmi} | ${bmiStatus}`;
};

document.querySelector(`#btnCalc`).addEventListener(`click`, calculator);
