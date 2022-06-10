`use strict`;
let commEmail;
let commName;
let comment;
let totalComments = 0;

function createComm() {
  commName = `Name: ` + document.getElementById(`commName`).value;
  commEmail = `Email: ` + document.getElementById(`commEmail`).value;
  comment = `Comment: ` + document.getElementById(`comment`).value;

  const newComment = document.createElement(`div`);
  newComment.className = `newComment`;
  ///NAME
  const nameDisplay = document.createElement(`p`);
  const nameContent = document.createTextNode(commName);
  nameDisplay.appendChild(nameContent);
  nameDisplay.className = `nameDisplay`;
  ///EMAIL
  const emailDisplay = document.createElement(`p`);
  const emailContent = document.createTextNode(commEmail);
  emailDisplay.appendChild(emailContent);
  emailDisplay.className = `nameDisplay`;
  ///COMMENT
  const commentDisplay = document.createElement(`p`);
  const commentContent = document.createTextNode(comment);
  commentDisplay.appendChild(commentContent);
  commentDisplay.className = `nameDisplay`;
  totalComments++;
  ///DELETE BUTTON
  const deleteBtn = document.createElement(`button`);
  deleteBtn.className = `deleteBtn`;
  deleteBtn.setAttribute(`id`, totalComments);
  const deleteBtnName = document.createTextNode(`Delete`);
  deleteBtn.appendChild(deleteBtnName);

  newComment.appendChild(nameDisplay);
  newComment.appendChild(emailDisplay);
  newComment.appendChild(commentDisplay);
  newComment.appendChild(deleteBtn);
  const lastDiv = document.getElementById(`lastDiv`);
  document.body.insertBefore(newComment, lastDiv.nextSibling);
  newComment.classList.add(totalComments);

  function hide(event) {
    event.target.parentElement.classList.add(`hidden`);
  }
  deleteBtn.addEventListener(`click`, hide);
}

document.querySelector(`#btnComment`).addEventListener(`click`, createComm);
