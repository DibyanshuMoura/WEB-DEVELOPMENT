// promisifiedSetTimeout
function setTimeoutPromisified (ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}

function callback () {
  console.log("Inside the Promisified version of setTimeout.");

}

setTimeoutPromisified(3000).then(callback);


// fetchPromisified
let url = "https://api.github.com/users/DibyanshuMoura";

function fetchPromisified (url) {
  return new Promise (resolve => fetch(url).then(resolve))
}

fetchPromisified(url).then(response => response.json()).then(data => console.log(data));


// promisifiedfsReadFile
const fs = require("fs");

function promisifiedReadFile(fname) {
  return new Promise((resolve, reject) =>
    fs.readFile(`${fname}`, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );
}

function readPromisifiedFileData(data) {
  console.log(data);
}

promisifiedReadFile("a.txt").then(readPromisifiedFileData).catch(err => `Err is ${err}`);
