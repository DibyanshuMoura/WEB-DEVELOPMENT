function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(() => {resolve(ms)}, ms));
}

setTimeoutPromisified(2000).then((data) => {
  console.log(`${data / 1000} seconds have passed.`);
});
