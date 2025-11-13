// callback hell

setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

// alternate solution

const p = new Promise((resolve) => setTimeout(resolve, 1000));
p.then(() => console.log("hi"))
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("hello");
        resolve();
      }, 3000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("hi there");
        resolve();
      }, 5000);
    });
  });