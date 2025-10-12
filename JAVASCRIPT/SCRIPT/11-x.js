let toDoPractiseThree = JSON.parse(localStorage.getItem('todo')) || [];

if (toDoPractiseThree.length != 0)
  renderFinalTodo();

function pushIntoTodoThree() {
  const todoName = document.querySelector('.finalTodoText').value;
  const todoDate = document.querySelector('.finalTodoDate').value;
  toDoPractiseThree.push({ name: todoName, dueDate: todoDate });
  renderFinalTodo();
  localStorage.setItem('todo', JSON.stringify(toDoPractiseThree));
}

function renderFinalTodo() {
  let accumulateAll = '';
  for (let i = 0; i < toDoPractiseThree.length; ++i) {
    accumulateAll += `<div>${toDoPractiseThree[i].name}</div>
    <div>${toDoPractiseThree[i].dueDate}</div>
    <button class="deleteButton" onclick="
    toDoPractiseThree.splice(${i}, 1);
    localStorage.setItem('todo', JSON.stringify(toDoPractiseThree));
    renderFinalTodo();
    ">Delete</button>`;
  }
  document.querySelector('.finalTodoShow').innerHTML = accumulateAll;
  document.querySelector('.finalTodoText').value = '';
  document.querySelector('.finalTodoDate').value = '';
}