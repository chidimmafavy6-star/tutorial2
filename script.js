// // alert("Welcome to Javascript");
// // let name = "Ada";
// // console .log(name);

// // let age = 20;
// // age = 21;

// // const country = "Nigeria";

// // console.log(age);
// // console .log(country);

// // let isstudent=true
// // let result;
// // let selectedUse= null;

// // let x =20;
// // let y =21;
// // let 'x + y'
// // let result= null; 

// let a =10;
// let b =3;
// let c = 12;
// console.log(a+b);
// console.log(a-b);
// console .log(a*b);
// console.log(a*b*c);
// console.log(a/b);
// console.log(c/b);
// console.log(c/a);
// console.log(a/c);

// let score = 10;
// score += 5;
// score -=2;
// 5 == "5";
// 5 === "5";
// 5 !== "5";
// 10 < 5;
// 10 > 5;
// 10 <= 10;
// && AND
// || OR
// ! NOT

// const age = 20;
// const hasID = true;
// const isEligible= age>= 18 && hasID;
// console.log(isEligible);

// const FirstName = "Chidimma";
// const LastName="Favour";
// console.log(FirstName + " " + LastName)
// console.log(`${FirstName} ${LastName}`);
// console.log("Chidimma".toUpperCase());
// console.log("Favour".length)
// console.log("Dimma".toLowerCase());
// console.log(" Olivia ".trim())
// console.log("Thomas andrew" .includes("andrew"));

const FullName = "Ikediobi Chidimma";
const searchWord = "Chidimma";

console.log("FullName:", FullName);
console.log("1. length:",FullName.length);
console.log("2. uppercase:", FullName.toUpperCase());
console.log("3. Lowercase:", FullName.toLowerCase());
console.log("4. Contains 'Chidimma'?", FullName.includes(searchWord));

const price = "1500";
const numericprice = Number(price);

console.log(numericprice);
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.max(10,20,5));
console.log(Math.min(10,20,5));

// const age= prompt("what is your age?");
// const status = age >=18 ? "Adult": "Minor"
//  console.log(`Great! Age, ${age}`);
// if(age >=18){
//     console.log("Adult");
// }else if(age >13){
//     console.log("Teenager");
// }else{
//     console.log("Child");
// }

// USING TENARY
// let age = 20;
// let result = age >=18 ? "you are an adult":"you are a minor";

// console.log(result);

// let age = prompt("what is your Age");
// let result= age >= 18 ? "you are an Adult" : "you are a Minor";

// console.log("status:" + "" + result);

// for(let i = 1; i <= 4; i++) {
//     console.log("Welcome" , i);
// }
// for(let i=5; i >= 1; i--){
//     console.log("Welcome", i);
// }
// for(let i = 0; i <= 20; i += 3) {
//     console.log(i);
// }
// let number = 1;

// while (number <= 5) {
//     console.log (number);

//     number++;
// }

// let number = 1
// do {
//     console.log(number);

//     number++;
// } while(number <= 5);

// for(let i =1; i <=10; i++){
//     if(i===86) {
//        break;
//     }
//     console.log(i);
// }

// for(let i = 1; i <=5;i++){
//     if(i===3){
//         continue;
//     }
//     console.log (i);
// }

// function add(a, b) {
// return a + b;
// const result = add(10, 20)
// console .log(result);
// }

// function greet(name){
//     console.log("Hello " + name);
// }
//  greet("Chidimma");
// greet("Favour");
// greet("Gracious");
// greet("Anita");
// greet("dabbey");
// greet("esther");

// function add(a, b ,c) {
// console.log (a + b + c);
// }
// add(10, 20 ,10)

// function add (a, b){
//     return a+b;
// }
// let result = add (10,20)
// console.log(result);
// function checkAge (age) {
//     if(age >= 18){
//         return "you are an adult"
//     } else{
//         return "you are a minor"
//     }
// }
// console.log(checkAge (20))

// const greet = function (){
//     console.log ("Hello");
// }
// greet();


 
// function isEven(number) {
//   return number % 2 === 0;
// }

// // Usage:
// console.log(isEven(10)); 
// console.log(isEven(7));  


//   if (isEven(result)) {
//     console.log(result + " is even");
//   } else {
//     console.log(result + " is odd");
//   }
  
//   return result;


// calculate(10, 4, "add"); 


// ARRAY
// let fruit1 = "Apple";
//  let fruit2 = "Mango";
//  let fruit3 = "Orange";

//   let fruits = ["apple", "mango", "orange"];
// //  console.log(fruits[0]);
// //  console.log(fruits[1]);
// //  console.log(fruits[2]);

//  fruits[1] = "banana";
//  console.log (fruits.length);t
// let fruits = ["apple","mango"];
// fruit.pop();
// console.log (fruit);


// LOOPING THROUGH THE ARRAY LIST
// 

let person ={
  name: "Chidimma",
  greet: function(){
    console.log("hello " + this.name);
  }
};
person.greet();

//JAVASCRIPT OBJECT
let pupil = {
  name: "Chidimma",
  age: 20,
  course: "Nursing",
  school: "Chukwuemeka Odumegwu Ojukwu"
}
delete pupil.age;

console.log(pupil.name);
console.log(pupil.age);
console.log(pupil.course);

console.log("I am from " + pupil.school)