// array all takes in an array of promises and then start each of then parallely and makes an array of their responses too

function fnOne(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
function fnTwo(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
function fnThree(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

function calculateTime(fn1, fn2, fn3) {
  let start = Date.now();
  let arrayPromises = [fn1(1000), fn2(2000), fn3(3000)];
  return Promise.all(arrayPromises).then (() => Date.now() - start)
}

calculateTime(fnOne, fnTwo, fnThree).then((data) => {
  console.log(data);
});
