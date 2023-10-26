// let a = "Hello World! Chank";
// document.getElementById("test").innerHTML = a;

//var a = 5, b = 6, c = a + b, d = a * b;

// var a = 500,

// b = 60,

// c = a + b,

// d = a * b; 

// console.log(a);

// console.log(b);

// console.log(c);

// console.log(d);

var school = "Davis College";

var $school = "Kates College";

var _school = "Vic College";

var $$ = "Dollar College";

var _ = "Underscore College";



console.log(school);

console.log($school);

console.log(_school);

console.log($$);

console.log(_);

// Selfish let
// var a = 2;
// var a = 20;
// console.log(a);


// let a = 2;
// a = 20;
// console.log(a);


// var p = 30;
// let p = 40;
// console.log(p);


// let v = 10;
// var v = 2;
// console.log(v);

// Scope
// var a = 4;
// //console.log(a);

// function numb(){
//     var a = 5;
//     console.log(a);
// }
// console.log(a);
// numb();
// console.log(a);

//Hoisting
// x = 20;
// console.log(x);
// var x;

a = 20;
console.log(a);
let a;

// String
// var str1 = 'javascript';
// var str2 = "javascript";
// var str3 = `javascript`;
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);

let str = String("hello");
console.log(typeof str);

// let str = new String("hello");
// console.log(str)
// console.log(typeof str);

var str1 = 'javascript';
// console.log(str1.charAt(5));
// console.log('good'.charAt(0));
console.log(str1[2]);    // v
console.log('good'[0]);  // g

// let str1 = "Anne";
// let str2 = " James";

// let total = str1.concat(str2)
// console.log(total)
// let total2 = str1.concat('Tim')
// console.log(total2)

// let p = " "
// console.log(str1 + p + str2);
let x = 10, y = 20;
console.log(`The sum of x and y is ${x + y} and whatever`);

console.log(str.slice(0,3)); // jav
console.log(str.substring(1,3)); // ava

// Boolean

// var isWorking = true;
// var isRunning = false;
// console.log(typeof isRunning);
// console.log(Boolean("")); //false
// console.log(Boolean(4/0)); //true infinity
// console.log(Boolean(0)); //false
// console.log(Boolean(Math.sqrt(-1))); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false

// BigInt

// console.log(1n == 1); //true
// console.log(1n === 1); //false

// null
// var y = ""; 
// console.log(y);
// console.log(typeof y); // string
// y = null;
// console.log(typeof y); // empty object or no value 

// let a = null;
// console.log(typeof a);
// console.log(null == undefined); // true

// Symbol
// let k = Symbol("Hello");
// console.log(k.toString()); //Symbol(Hello)
// console.log(k.description); //Hello
// Object Key
let color = Symbol("color");
let fruit = {
    name: "Apple",
    [color]: "Green"
};
console.log(fruit);//{name:'Apple', Symbol(color):'Green'} can not iterate over a symbol
// When you create a Symbol using Symbol(), it creates a new and unique symbol every time you call it.

//Ternary Operator
// const age = 20;
// const drive = age >= 18 ? "qualified" : "Not qualified";
// console.log(drive); //qualified
// let x = void(10);
// console.log(x); //undefined

// Object
const man = {
    weight: "25kg", 
    color: "Black",
    height: "120cm"
}
console.log(typeof man);
let user2 = {};
user2.name;
console.log(typeof user2.name); // Undefined

// Function express(named) or (anonymous) // without add
// Array function
let x = function add(a,b){  // let x = (a,b) => {return a+b;} // Simplified: let x = (a,b) => a+b
    return a + b;  
}
console.log(add(2,4)); // ReferenceError: add is not defined
console.log(x(2,4));

const hello = () => { console.log("Hello World");};
hello();

const please = function(b){
    return function(a){
      console.log(`Please ${a} and ${b}`) 
    };   
}
let x = please("Anne");
x("Tony"); // Please Tony and Anne

// Array
//let u = new Array(); is slower than let l = [];
let a = [20, 40, 60, 80];
console.log(Array.isArray(a)); //True
console.log(a instanceof Array); //True