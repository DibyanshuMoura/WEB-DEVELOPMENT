// it depends on who calls the function like if I call it using (then i need to pass resolve, reject) but if I just pass the reference of the function then the JS engine internally adds the (resolve, reject) to the function, but while using the arrow function () => {}, I did not define any resolve or reject so even when the JS engine tried to add it my arrow function does not take any arguments so it justs ignores it


function waitFor3s (resolve) {
  setTimeout(resolve, 3000);
}

function setTimeoutPromisified () {
  return new Promise (waitFor3s)
}

function main () {
  console.log("Inside Main");
}
setTimeoutPromisified().then(main);
