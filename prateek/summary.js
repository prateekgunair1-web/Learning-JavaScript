// Primitive

// 7 types : string, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 2338573838432n;

// Reference (Non Primitve)

// Array, Objects, Functions if u wana master J.S u should master objects and browser Event

const heros = ["luffy", "sanji", "oden"];
let myObj = {
  name: "Prateek",
  age: 20,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Stack (Primitve), Heap (Non-Primitive)

let myYotubename = "Pentri_Editz";
anothername = "chaiaurcode";

console.log(myYotubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "prateekgunair1@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
