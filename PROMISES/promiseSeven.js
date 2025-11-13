// clean file promisified function reads that data from the file and then write the trimmed data back to the file

const fs = require("fs");

function cleanFile(fileName) {
  return new Promise((resolve, reject) => {
    let fileContents;
    fs.readFile(`${fileName}`, "utf-8", (err, data) => {
      if (err) reject(err);

      fs.writeFile(`${fileName}`, `${data.trim()}`, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });
}

cleanFile("a.txt")
  .then(() => {
    console.log("File is cleaned.");
  })
  .catch(() => {
    console.log("Error in cleaning the file.");
  });
