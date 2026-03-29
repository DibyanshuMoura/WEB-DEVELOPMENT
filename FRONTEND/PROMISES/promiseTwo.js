// Promisified setTimeout

// const promisifiedSetTimeout = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Inside SetTimeout");
//     resolve();
//   }, 2000);
// });

// promisifiedSetTimeout
// .then(()=>{
//   console.log("Promise Resolved.");
// });

// async function promisifiedSetTimeoutRun() {
//   try {
//     console.log("Waiting...");
//     await promisifiedSetTimeout;
//     console.log("Promise Resolved");
//   } catch (err) {
//     console.log(`Error is ${err}`);
//   }
// }

// promisifiedSetTimeoutRun();


const promisifiedFetch = async function () {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Error is ${err}`);
  }
};

promisifiedFetch();