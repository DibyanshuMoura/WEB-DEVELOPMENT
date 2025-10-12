let toDoPractiseOne = [];
function pushIntoTodo() {
  toDoPractiseOne.push(document.querySelector(".practiseOne").value);
  console.log(toDoPractiseOne);
  document.querySelector(".practiseOne").value = '';
}

document.querySelector('.practiseOneButton')
  .addEventListener('click', pushIntoTodo);


//for each function used here
let toDoPractiseTwo = [];
function pushIntoTodoTwo() {
  toDoPractiseTwo.push(document.querySelector('.practiseTwo').value);
  document.querySelector('.practiseTwo').value = '';
  let accm = '';
  toDoPractiseTwo.forEach(function (val, idx) {
    accm += `<p>${val}</p>`;
  });
  document.querySelector('.toDoPractiseTwoShow').innerHTML = accm;
}
document.querySelector('.practiseTwoButton')
  .addEventListener('click', pushIntoTodoTwo);



let toDoPractiseThree = [];
function pushIntoTodoThree() {
  const todoName = document.querySelector('.finalTodoText').value;
  const todoDate = document.querySelector('.finalTodoDate').value;
  toDoPractiseThree.push({ name: todoName, dueDate: todoDate });
  renderFinalTodo();
}

document.querySelector('.finalTodoSubmit')
  .addEventListener('click', pushIntoTodoThree);

function renderFinalTodo() {
  let accumulateAll = '';
  toDoPractiseThree.forEach((value, i) => {
    accumulateAll += `<div>${value.name}</div>
    <div>${value.dueDate}</div>
    <button class="deleteButton">Delete</button>`;
  });
  document.querySelector('.finalTodoShow').innerHTML = accumulateAll;
  document.querySelector('.finalTodoText').value = '';
  document.querySelector('.finalTodoDate').value = '';

  document.querySelectorAll('.deleteButton')
    .forEach(function (button, idx) {
      button.addEventListener('click', () => {
        toDoPractiseThree.splice(idx, 1);
        renderFinalTodo();
      });
    }); 
}
