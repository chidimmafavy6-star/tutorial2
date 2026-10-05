// // let title = document.getElementById("title");

// // title.textContent = "Hello Students";

// // const heading = document.querySelector("h1")

// // heading.textContent = "Javascript is Amazing";
// // // const heading = document.getElementById("heading");

// // // console.log(heading)

// // // // HOW YOU WRITE IT NORMAL
// // // const title = document.querySelector(".title")
// // // console.log(title);

// // // // FOR ID
// // // const title =document.querySelector("#title");

// // // // FOR TAG
// // // // you can use this if you dont have a tag
// // // const title  =document.querySelector("h1");

// // function sayHello(){
// //     alert("Hello student!");
// // }

// // const button = document.getElementById("btn");

// // button.addEventListener("click", function(){
// //     alert("Successfully added!");
// // });

// // button.addEventListener("mouseover",function() {
// //     console.log ("mouse is over the button");
// // });
// // button.addEventListener("mouseout",function(){
// //     console.log ("mouse left the button");
// // })

// // const username = document.getElementById("username");

// // // username.addEventListener("keydown", function (event){
// //     // console.log(event.key);
// // // });

// // let count = 0;

// // const countDisplay = document.getElementById("count");
// // const increase = document.getElementById("increase");
// // const decrease = document.getElementById("decrease");

// // increase.addEventListener("click",function(){
// //     count++;
// //     countDisplay.textContent = count;
// // })

// // decrease.addEventListener("click",function(){
// //     count--; 
// //     countDisplay.textContent = count;
// // })

// // // GETTING OF INPUT VALUES
// // const form = document.getElementById("Login-Form");

// // form.addEventListener("submit", function (event) {
// //     event.preventDefault();
// //     const Fullname = document.getElementById("Fullname").value;
// //     const password = document.getElementById("password").value;

// // if(Fullname === ""){
// //     alert ("please enter your Fullname");
// //     return;
// // }
// // if (password === "") {
// //     alert("Please enter Password");
// //     return;
// // };
// // // alert ("login information submitted");
// // console.log("Form submitted")
// // console.log("Fullname")
// // console.log("password")
// // });



// // // LOCAL STORAGE
//  localStorage.setItem("name","john");
//  const name =
//  localStorage.getItem("name");
//  console.log(name);

//  localStorage.setItem("country","Nigeria")
// const country =
// localStorage.getItem("country");
// console.log(country);

//  localStorage.setItem("course","Nursing")
//  const course =
// localStorage.getItem("course");
//  console.log(course);

// localStorage.setItem("age",20);
// const age = Number(localStorage.getItem("age",20));

// console.log(age + 5);

// localStorage.setItem("username","Chidimma")
// localStorage.removeItem("username");
// const username= localStorage.getItem("username");
// console.log(username);

// // let student={
// //     name:"John",
// //     age:"20",
// //     country:"Nigeria",
// //     course:"Nursing",
// // };

// const student = {
//     name:"Favour",
//     Age:20
// };
// const studentData = JSON.stringify(student);
// console.log(studentData);

const student = {
    name:"Chidimma",
    age:"20",
    Country:"Nigeria",
    course:"Nursing"
};

localStorage.setItem("student",
     JSON.stringify(student)
    );

// console.log(localStorage.getItem("student"))

const studentData = JSON.parse(
    localStorage.getItem("student")
);
console.log(studentData);
console.log(studentData.age);
console.log(studentData.Country);
console.log(studentData.course);


const fruits = [
    "Apple",
    "Orange",
    "Mango",
    "Banana",
    "Guava",
];

localStorage.setItem("fruits",
    JSON.stringify(fruits)
);

const storedfruits =
JSON.parse(localStorage.getItem("fruits"));

console.log(storedfruits);
