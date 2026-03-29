const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File not found");
  } else console.log(data);
});

fs.readFile("b.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File not found");
  } else console.log(data);
});

console.log("Done");

// async code in js
