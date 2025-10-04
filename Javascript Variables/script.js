console.log("Hey");

var a=2;
var b=2;
console.log(a+b);

var name="John";
var age=30;
console.log("My name is " + name + " and I am " + age + " years old.");

console.log(typeof a, typeof b, typeof name);

// variables are case-sensitive name and Name are different
// Var has GLOBAL scope but Let and Const have BLOCK scope
// Const cannot be reassigned and is used to keep same value permanently

let Name="Zain";
let Age=22;
let height=5.11;
let u=undefined;
const p= true;
let r=null;

console.log(typeof Name, typeof age, typeof height, typeof u, typeof p, typeof r);
console.log( Name, Age,  height, u, p, r);

// object has a key and value pair, null is also an object in javascript

let o={
    firstName: "Zain",
    job: "Web Developer",
    "degree time": 4.5
}

console.log(o);

o.income="10 lakh";

console.log(o);




