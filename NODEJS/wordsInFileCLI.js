const { program } = require("commander");
const fs = require("fs");

program.argument("<filePath>").action((filePath) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("File not found.");
    } else {
      const fileData = data;
      let countWord = 0;
      let currentWord = "";
      for (let i = 0; i < fileData.length; ++i) {
        if (fileData[i] !== " ") {
          if (fileData[i + 1] === " ") {
            countWord++;
            currentWord = "";
          } else  {
            currentWord += fileData[i];
          }
        }
      } 
      if (currentWord) countWord++;
      console.log(`You have ${countWord} words in this file.`);
    }
  });
});

program.parse();
