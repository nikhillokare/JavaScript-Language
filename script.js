// Variables,constants,and comments
// var score = 34;
// var score = 56;
// let points = 45;
// console.log(points);

// const number = 10;
// console.log(number);

// 7 Datatypes
// Number,String,Boolean,null,Undefined,object
// let score = null;
// console.log(score);

// Symbol DS(object)

// String
// console.log("Hello guys");
// let firstName = "Nikhil";
// let lastName = "Lokare";
// console.log(firstName, lastName);

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// using template literals
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//Getting String char
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(lastName.indexOf("a"));

// let strings = "coding running reading";
// // trim
// console.log(strings);
// console.log(strings.trim());
// // indexOf
// let a = strings.trim();
// console.log(a.lastindexOf("Running"));

// slice
// let fullName = "nikhillokare";
// console.log(fullName.slice(0, 5));

// split

// let colors = "brown,blue,black,gray";
// let colorArray = colors.split(",");
// console.log(colorArray);
// let str = "Hello";
// console.log(str);
// str[0] = "N";
// console.log(str[0]);

// let score = 50;
// console.log(score, typeof score);

// let result = score % 2;
// console.log(result);

// let age = 22;
// console.log(age == "22");

// console.log(age === "22");

// Type Conversion
// let stringType = "54";

// number method

// let numberType = Number(stringType);
// console.log(numberType);

// let num = 10;
// console.log(num, typeof num);

// let s = String(num);
// console.log(s, typeof s);

// Arrays
// let d1 = ["biryani", "chat", "chawal-dal"];
// console.log(d1);
// d1[3] = "chicken";
// console.log(d1)
// console.log(d1.join(" "));
// console.log(typeof d1);
// console.log(d1.length);

// push method

// console.log(d1.push("roti"));
// console.log(d1);

// POPmethod
// console.log(d1.pop());
// console.log(d1);

// Boolean values and comaprison opeartors

// let booleanType = true;
// let stringType = "true";

// console.log(booleanType, typeof booleanType);
// console.log(stringType, typeof stringType);

// let status = 10 <= 56;
// console.log(status);

// Control flow
// For Loop

// for (let i = 0; i <= 10; i++) {
//   console.log("Nikhil", i);
// }

// //Usecase of for loop
// let d = ["A", "B", "C", "D"];

// for (let i = 0; i < d.length; i++) {
//   console.log(d[i]);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log("for loop", i);
// }

// console.log("************");

// let j = 1;
// while (j <= 5) {
//   console.log("for loop", j);
//   j++;
// }

// let d = ["N", "I", "K"];
// let j = 0;
// while (j < d.length) {
//   console.log(d[j]);
//   j++;
// }

// if else if
// let d = 70000;
// if (d <= 70000) {
//   console.log("nikhil");
// } else if (d > 50000) {
//   console.log("lokare");
// } else {
//   console.log("nikk");
// }

// Functions
// function Sum_Of_Int() {
//   console.log("you are running");
// }
// Sum_Of_Int();

// Function Expression
// let fun = function (name) {
//   console.log(`welcome ${name} to the programming`);
// };
// fun("Nikhil");
// fun("Akhil");

// let Calculate = function (birthYear, currentYear = 2023) {
//   let age = currentYear - birthYear;
//   console.log(`Your Current Age is ${age}`);
// };
// Calculate(1998);

// Arrow Function
// let inv = (name) => `Welcome ${name} to Event`;
// console.log(inv("coders"))
// Passing function as an Argument(Higher Order function example)
// let upperCase = function (str) {
//   return str.toUpperCase();
// };

// let LowerCase = function (str) {
//   return str.toLowerCase();
// };

// let transform = function (str, fun) {
//   return fun(str);
// };

// console.log(transform("Hello", LowerCase));

// invoked function Expression
// (function () {
//   console.log("this function wiil neven execute again", name);
// })("IIFE");

// Settimeout And SetInterval
// setTimeout(func|code,delay,agr1,arg2....)

// function Greeting(name) {
//   console.log(`welcome ${name}`);
// }

// setTimeout(Greeting, 1000, "Nikhil");

// setTimeout(function Greeting() {
//   console.log("Welcome");
// }, 3000);

// setInterval(func|code,delay,agr1,arg2....)

// setInterval(Greeting, 3000, "Nikhil");

// Hoisting
// test = 10;
// console.log(test);
// var test;

// test();
// function test() {
//   console.log("Welcome");
// }

// Introduction to object in JS
// let car = {
//   color: "red",
//   model: "2022",
//   company: "BMW",
// };

// console.log(car);
// let propName = "color";
// console.log(car[propName]);

// Modify the object

// car.color = "blue";
// console.log(car.color);

// Delete Keyword
// let obj = {
//   prop1: "value1",
//   prop2: "value",
// };

// delete obj.prop1;
// console.log(obj.prop1);

// this keyword

// let person = {
//   firstName: "Nikhil",
//   lastName: "Lokare",
//   city: "Karad",
//   birthyear: 1998,
//   Education: "Software Engineer",
//   getSummary: function () {
//     // return `${this.firstName} ${this.lastName} lives in ${this.city} and his birthyear is ${this.birthyear} and he is a ${this.Education}`;
//     return this;
//   },
// };
// console.log(person.getSummary());

// ForEach method Array used to traverse over the array

// let d = ["A", "B", "C", "D", "E"];

// using for loop
// for (let i = 0; i < d.length; i++) {
//   console.log(d[i]);
// }

// d.forEach(function (element) {
//   console.log(element);
// });

// let block = [
//   { userName: "Nikhil", resaon: "Abusive content" },
//   { userName: "Aniket", reason: "copyright" },
// ];
// console.log(block);

// for (let i = 0; i < block.length; i++) {
//   console.log(block[i].userName);
// }

//Math Object built in object in Javascript

// console.log(Math);

// let number = 7.6;
// console.log(Math.round(number)); //round to nearest number
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.sqrt(number));
// let random = Math.random();
// console.log(Math.round(random * 100));

//function call and apply method
// let mainPlane = {
//   airline: "Fly India",
//   code: "FI",
//   booking: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked in flight ${this.airline} with flight number ${this.code} ${flightNum}`
//       this .booking.push({flight:`${this.airline},name:`})
//     );
//   },
// };

// mainPlane.book(553, "nikhil");

// Pass by value and pass by reference

// let arr = [1, 2, 3, 4, 5];
// let getref = arr;
// getref[9] = 6;
// getref.shift();
// console.log("original array", arr);
// console.log("getref array", getref);

// for in loop

// let car = {
//   model: 2022,
//   color: "Black",
//   company: "Toyoto",
// };
// console.log(car);
// for (let key in car) {
//   console.log(key);
// }

// DOM(Document Object Model)
// Tree like Structure

// let result = document.querySelectorAll("p");
// console.log(result);

// let r = document.querySelector(".nikhil");
// console.log(r);

// let r = document.querySelector("#coders");
// console.log(r);

//get element by tag
// let t = document.getElementsByTagName("p");
// console.log(t);

// let t = document.getElementById("coders");
// console.log(t);

// Updating and changing content

// innertext
// let h1 = document.querySelector("h1");
// console.log(h1.innerHTML);

// h1.innerHTML = "Hello World";
// console.log(h1.innerHTML);

// let t = document.querySelector("a");
// // console.log(t.getAttribute("href"));
// t.setAttribute("href", "https://www.google.com");
// console.log(t.getAttribute("href"));

// Adding the styles

// let header = document.querySelector("h1");
// header.style.backgroundColor = "Yellow";

// header.classList.add("newClass");
// header.classList.remove("newClass");
// header.classList.replace("main", "newClass");
// let t = document.querySelector(".content");
// console.log(t.children);
// console.log(Array.from(t.children));

// Event Basics (Click Event)
// let bt = document.querySelector(".btn");
// bt.addEventListener("click", () => {
//   console.log("clicked");
// });

// let ele = document.querySelector("li");
// console.log(ele);

// ele.forEach(function (element) {
//   element.addEventListener("click", function () {
//     console.log("clicked");
//   });
// });

//Form Events (Submit Forms)

// let form = document.querySelector(".cls_btn");
// let email = document.querySelector("#eml");
// let pass = document.querySelector("#password");
// console.log(email);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(email.value, pass.value);
// });

// Rgression Expression
// let form = document.querySelector(".cls_btn");
// let email = document.querySelector("#eml");
// let pass = document.querySelector("#password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let passwordValue = pass.value;
//   console.log(passwordValue);
// });

// Working With Array Methods

// let arr = ["a", "b", "c", "d", "e"];
// let a = arr.reverse();
// console.log(a);
// console.log(arr);
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let concat = nums.concat(arr);
// console.log(concat);

// join
// let join = nums.join("__");
// console.log(join);

// Slicing array
// let num = [1, 2, 3, 4, 5];

// let nums = num.slice(1, 3);
// console.log(nums);

// splice method
// let num = [1, 2, 3, 4, 5];
// let up = num.splice(1, 1, 1);

// console.log(up);
// console.log(num);

// At Method

// let num = [22, 44, 6, 88];
// console.log(num.at(1));

// Map method
// let salaries = [3000, 5000, 8000, 9000];
// let newsalaries = salaries.map((salary) => {
//   let incrementedAmount = salary / 2;
//   return salary + incrementedAmount;
// });
// console.log(newsalaries);

// Filter Method
// let g1 = ["watch", "ring", "clock", "teddy-bear"];
// let Filterm = g1.filter((g1) => {
//   if (g1 == "watch" || g1 == "ring") {
//     return g1;
//   }
// });
// console.log(Filterm);

// reduce function method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let arrNum = arr.reduce(function (total, currentValue) {
//   return total + currentValue;
// }, 0);
// console.log(arrNum);

// find method
// let s1 = [
//   { id: 1, name: "nikhil" },
//   { id: 2, name: "aniket" },
//   { id: 3, name: "sanket" },
// ];

// let data = s1.find((s1) => {
//   return s1.id === 1;
// });
// console.log(data);

// find index method
// let ages = [11, 12, 21, 43, 56, 77, 88, 32];

// let result = ages.findIndex((age) => {
//   return age > 15;
// });
// console.log(result);

// some and every

// let score = [1, 2, 3, 4, 5, 6];
// let result = score.some((score) => {
//   return score > 50;
// });

// console.log(score);
// let score = [1, 2, 3, 4, 5, 6];
// let result = score.every((score) => {
//   return score > 50;
// });

// console.log(score);

// flat method
// let arr = [1, 2, 3, [4, 5, 6]];
// console.log(arr);

// let result = arr.flat();
// console.log(result);

// Flat Map
// let cart = [
//   {
//     name: "mobile",
//     qtl: 2,
//     price: 500,
//   },
//   {
//     name: "tablet",
//     qty: 2,
//     price: 6555,
//   },
// ];

// let newCart = cart.flatMap((item) => {
//   if (item.name === "mobile") {
//     return [
//       item,
//       {
//         name: "screen gaurd",
//         qtl: 1,
//         price: 0,
//       },
//     ];
//   } else {
//     return [item];
//   }
// });

// console.log(newCart);

// Sorting arrays

// let arr = [4, 5, 6, 3, 2, 8, 7, 6, 5];
// let arr1 = ["a", "x", "r", "y", "u", "m"];

// let sort = arr1.sort();
// let sort1 = arr.sort();
// console.log(sort);
// console.log(sort1);

// OOPS in JS

// let Car = function (color, model) {
//   this.color = color;
//   this.model = model;
// };
// let instance = new Car("Black", 2023);
// let instances = new Car("yellow", 2022);
// console.log(instance);
// console.log(instances);
// console.log(instances instanceof Car);

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("this is start engine of the class");
//   }
// }

// let honda = new Car("black", 3333);
// let honda1 = new Car("white", 2022);
// let honda2 = new Car("red", 2021);
// honda.startEngine();
// console.log(honda);
// console.log(honda1);
// console.log(honda2);

// Inheritance

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("this is start engine of the class");
//   }
// }
// class Bike extends Car {
//   constructor(color, model, engine) {
//     super(color, model);
//     this.engine = engine;
//   }
//   start() {
//     console.log("this is bike class");
//   }
// }
// let bike = new Bike("black", 2033, "v8");
// console.log(bike);
// bike.startEngine();
// bike.start();

// Asynchronous Javascript

// Async Code

// console.log(1);
// console.log(2);
// // Async Code
// setTimeout(() => {
//   console.log("call back function called after 3 second");
// }, 3000);
// console.log(3);
// console.log(4);

// HTTP requeest

// let request = new XMLHttpRequest();
// console.log(request);

// request.addEventListener("readystatechange", () => {
//   console.log(request, request.readyState);
// });

// // set up request

// request.open("Get", "https://developer.mozilla.org/en-US/docs/Web/API/Blob");

// // send request

// request.send();
