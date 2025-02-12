// -----

// title = "CRUD";
// crud_post = Post.objects.get((title = title));

// Post.object.create((title = "New post"), (text = "Next of new post"));
// post = Post.object.get((title = "New post"));
// print(post.title);

// -----

// async function f() {
//   return 1;
// }
// f().then(alert); // 1 у вспливаючому вікні

// те ж саме:

// async function f() {
//   return Promise.resolve(1);
// }
// f().then(alert);

// -----

// async function f() {
//   await Promise.reject(new Error("Ups!!"));
// }

// // робить те ж саме, що и цей

// async function f() {
//   throw new Error("Ups!!");
// }

// -----

// LESSON 13

// -----

// const btn = document.querySelector(".js-get-data");

// btn.addEventListener("click", getUrl);

// function getUrl() {
//   //   return fetch("https://api.monobank.ua/bank/currency"); // запит на курс валют від монобанку
// разшифровка коду: сеть/нажимаємо на currency/пред перегляд/копіюємо/вставляємо в
// http://json.parser.online.fr/

//   return fetch("https://the-cocktail-db.p.rapidapi.com/search.php'");
//   fetch(
//     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
//   );
// }

// всі api отримуємо з інету
// наприклад: курс валют/ пошук api.monobank/копіюємо посилання

// -----
// fetch

// let promise = fetch(url, {
//   // Опції
//   method: "GET", // POST, PUT, DELETE та інші
//   headers: {
//     // значення цього заголовку зазвичай встановлюється автоматично,
//     // залежно від тіла запиту
//     "Content-Type": "text/plain;charset=UTF-8",
//   },
//   body: undefined, // string, FormData, Blob, BufferSource або URLSearchParams
//   referrer: "about:client", // або "", щоб не посилати заголовок Referer,
//   // або URL з поточного джерела
//   referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
//   mode: "cors", // same-origin, no-cors
//   credentials: "same-origin", // omit, include
//   cache: "default", // no-store, reload, no-cache, force-cache або only-if-cached
//   redirect: "follow", // manual, error
//   integrity: "", // контрольна сума, наприклад "sha256-abcdef1234567890"
//   keepalive: false, // true
//   signal: undefined, // AbortController, щоб перервати запит
//   window: window, // null
// });

// -----
// async/await

// async function a() {
//   return true;
// }

// a().then(console.log); // true

// -----
// await - призупиняє віконання функції, поки promise не виконається
// не можна використовувати await у звичайних функціяї (неасинхронних)

// let value = await promise

// async function a() {
//   let prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   let result = await prom;

//   console.log(result);
// }

// a(); // Hello через секудну

// так не можна:

// function b() {
//     let result = await promise
// }

// але можуть працювати в верхніх модулях

// let response = await fetch("https://api.monobank.ua/bank/currency");

// -----
// fetch

// const monocurrency = async () => {
//   let response = await fetch("https://api.monobank.ua/bank/currency");

//   if (response.ok) {
//     console.log("Ok");
//     console.log("response", response.json());
//   } else {
//     r: console.log("Err: ", response.status);
//   }
// };

// monocurrency(); // Ok

// -----
// headers

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
// });

// headers.has("Content-type");

// const postTest = async () => {
//   let user = {
//     name: "Ivan",
//     city: "Lviv",
//   };

//   // відправляємо ці дані в post запит
//   let response = await fetch(url, {
//     metod: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// postTest().then();

// -----
// try catch - робота з помилками
// працює синхронно

// try {
//   console.log("Start");
//   //   a;
//   console.log("Finish");
// } catch (err) {
//   console.log("Error");
// }

// try {
//   setTimeout(function () {
//     console.log("d");
//   }, 1000);
// } catch (err) {
//   console.log("Errrr");
// }

// setTimeout(function () {
//   try {
//     console.log("Ok");
//   } catch (err) {
//     console.log("Errrrr");
//   }
// }, 1000);

// виводимо помилки

// try {
//   da;
// } catch (err) {
//   console.log(err.name);
// } // ReferenceError

// try {
//   da;
// } catch (err) {
//   console.log(err.message);
// } // da is not defined

// try {
//   da;
// } catch (err) {
//   console.log(err.stack);
// } // ReferenceError: da is not defined

// -----

// let json = ``;

// try {
//   let user = JSON.parse(json);
// } catch (err) {
//   console.log("Errrrr", err.message);
// } // Errrrr Unexpected end of JSON input якщо прийшов не json

// -----
// finally - виконується завжди

// let json = `{"name": "Ann"}`;

// try {
//   let user = JSON.parse(json);
//   console.log("user", user); // user name: Ann
//   console.log("city", user.city); // city undefined
//   if (!user.city) {
//     throw new SyntaxError("Немає міста");
//   } // Errrr немає міста
// } catch (err) {
//   console.log("Errrrr", err.message);
// } finally {
//   console.log("finally"); // finally
// }

// -----
// web socket

// встановлюємо web socet зєднання

// let socket = new WebSocket(
//   "wss://javascript.info/article/websocket/demo/hello"
// );

// // -----
// // події:

// // onopen
// socket.onopen = function (e) {
//   console.log("Connection ok"); // Connection ok
//   socket.send("GoodDay");
// };

// // onmessage
// socket.onmessage = function (e) {
//   console.log("message", e.data);
// }; // message Hello from server, GoodDay!

// // onerror
// socket.onerror = function (err) {
//   console.log(err);
// };

// // onclose
// socket.onclose = function (event) {
//   if (event.wasClean) {
//     console.log("StopConnection", event.code);
//   } else {
//     console.log("Disconnect");
//   }
// }; // StopConnection 1000

// // -----
