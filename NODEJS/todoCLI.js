const { program } = require("commander");
const fs = require("fs");
let todoList;

function showTodoData() {
  todoList.forEach((element) => {
    console.log(
      `ID: ${element.id}, TODO: ${element.name}, DATE: ${element.date}`
    );
  });
}

function readFilePromisfied() {
  return new Promise((resolve, reject) => {
    fs.readFile(`todo.json`, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function writeFilePromisfied(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`todo.json`, data, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}
async function loadTodo() {
  try {
    let data = await readFilePromisfied();
    if (data === "") todoList = [];
    else todoList = JSON.parse(data);
  } catch {
    todoList = [];
  }
}

async function writeTodo(id, todo, date) {
  await loadTodo();
  todoList.push({ id: id, name: todo, date: date });
  await writeFilePromisfied(JSON.stringify(todoList));
}

async function todoDelete(tid) {
  await loadTodo();
  if (!todoList || todoList.length === 0) {
    console.log("List empty");
    return;
  }
  todoList = todoList.filter((val) => val.id != tid);
  await writeFilePromisfied(JSON.stringify(todoList));
}

program.name("CLI TODOLIST").description("A CLI that acts as a Todo List");

program
  .command("add <id> <todo> <date>")
  .action(async function (id, todo, date) {
    await writeTodo(id, todo, date);
    showTodoData();
  });

program.command("delete <id>").action(async function (id) {
  await todoDelete(id);
  showTodoData();
});

program.command("show").action(async function () {
  await loadTodo();
  showTodoData();
});

program.parse();
