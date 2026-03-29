let toDoPractiseOne = [];
function pushIntoTodo() {
  toDoPractiseOne.push(document.querySelector(".practiseOne").value);
  console.log(toDoPractiseOne);
  document.querySelector(".practiseOne").value = '';
}

let toDoPractiseTwo = [];
function pushIntoTodoTwo() {
  toDoPractiseTwo.push(document.querySelector('.practiseTwo').value);
  document.querySelector('.practiseTwo').value = '';
  let accm = '';
  for (let i = 0; i < toDoPractiseTwo.length; ++i) {
    accm += `<p>${toDoPractiseTwo[i]}</p>`;
  }
  document.querySelector('.toDoPractiseTwoShow').innerHTML = accm;
}

let toDoPractiseThree = [];
function pushIntoTodoThree() {
  const todoName = document.querySelector('.finalTodoText').value;
  const todoDate = document.querySelector('.finalTodoDate').value;
  toDoPractiseThree.push({ name: todoName, dueDate: todoDate });
  renderFinalTodo();
}

function renderFinalTodo () {
  let accumulateAll = '';
  for (let i = 0; i < toDoPractiseThree.length; ++i) {
    accumulateAll += `<div>${toDoPractiseThree[i].name}</div>
    <div>${toDoPractiseThree[i].dueDate}</div>
    <button class="deleteButton" onclick="
    toDoPractiseThree.splice(${i}, 1);
    renderFinalTodo();
    ">Delete</button>`;
  }
  document.querySelector('.finalTodoShow').innerHTML = accumulateAll;
  document.querySelector('.finalTodoText').value = '';
  document.querySelector('.finalTodoDate').value = '';
}