// this is a sequential chaining of the promises using .then()

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
  return fn1(1000)
    .then(() => fn2(2000))
    .then(() => fn3(3000))
    .then(() => Date.now() - start);
}

calculateTime(fnOne, fnTwo, fnThree).then((data) => {
  console.log(data);
});
