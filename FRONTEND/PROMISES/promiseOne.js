// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task Two");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async Two resolved");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Chai", email: "chai@example.com" });
//   }, 1000);
// }).then((user) => {
//   console.log(user.username);
//   console.log(user.email);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = false;
//     if (err) reject("Something went wrong");
//     else resolve({ username: "Dibyanshu", password: "heyitsdibyanshumoura07" });
//   }, 2000);
// })
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("All Done now");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = true;
//     if (err) reject("JS went wrong");
//     else resolve({ username: "JS", password: "123" });
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const data = await promiseFive;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromiseFive();

// async function firstAPI() {
//   try {
//     const url = "https://api.github.com/users/DibyanshuMoura";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(`Error is ${err}.`);
//   }
// }

let usr = "DibyanshuMoura";
fetch(`https://api.github.com/users/${usr}`)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(`Error is ${err}`))
