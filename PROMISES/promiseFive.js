
function main(resolve, reject) {
  let val = true;
  if (val) resolve("Resolved the promise"); // resolve in itself is a function
  else reject("Reject the promise"); // reject is also the same
}

const newPromise = new Promise(main); // promise is supposed to return something eventually

newPromise
  .then((data) => {
    console.log(data); // if resolve() in the main is called then it runs
  })
  .catch((err) => {
    console.log(err); // if reject() in the main is called then it runs
  });
