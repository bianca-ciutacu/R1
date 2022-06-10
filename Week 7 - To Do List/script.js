`use strict`;

const myList = document.querySelector(`#myList`);
let deleteBtn;
let editBtn;
let listElem;
let newTodo;
let doneBtn;
const submitTodo = document.querySelector(`#submitTodo`);

function createTodo(param) {
  listElem = document.createElement(`li`);
  listElem.textContent = `${param} `;
  deleteBtn = document.createElement(`button`);
  editBtn = document.createElement(`button`);
  deleteBtn.classList.add(`fa-solid`, `fa-trash`, `deleteBtn`);
  editBtn.classList.add(`fa-solid`, `fa-pen`, `editBtn`);
  listElem.appendChild(deleteBtn);
  listElem.appendChild(editBtn);
  myList.appendChild(listElem);
  deleteBtn.addEventListener(`click`, hide);
  editBtn.addEventListener(`click`, edit);
}

fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then(response => response.json())
  .then(function (data) {
    let task;
    data.forEach(function (elem) {
      task = elem.title;
      createTodo(task);
    });
  });

function createNewTodo() {
  newTodo = document.querySelector(`#newTodo`).value;
  createTodo(newTodo);
}

submitTodo.addEventListener(`click`, createNewTodo);

function hide(event) {
  event.target.parentElement.classList.add(`hidden`);
}
function edit(event) {
  const parentElem = event.target.parentElement;
  const toggle = parentElem.toggleAttribute(`contentEditable`);
  if (toggle) {
    event.target.parentElement.contentEditable = true;
    event.target.parentElement.style.backgroundColor = `#ffe44d`;
    let sibling = event.target.previousElementSibling;
    sibling.setAttribute(`class`, `hidden`);
    event.target.setAttribute(`class`, `fa-solid fa-circle-check editBtn`);
  } else {
    event.target.parentElement.style.background = `none`;
    let sibling = event.target.previousElementSibling;
    sibling.classList.remove(`hidden`);
    sibling.classList.add(`fa-solid`, `fa-trash`, `deleteBtn`);
    event.target.classList.remove(`class`, `fa-solid`, `fa-circle-check`);
    event.target.setAttribute(`class`, `fa-solid fa-pen editBtn`);
  }
}
