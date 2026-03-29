// file read using async await

const fs = require("fs");

function readFileAsync(fileName) {
  return new Promise((resolve, reject) =>
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );
}

async function awaitFile(fileName) {
  try {
    const data = await readFileAsync(fileName);
    console.log(data);
  } catch (err) {
    console.log(`Error is ${err}`);
  }
}

awaitFile("a.txt");
