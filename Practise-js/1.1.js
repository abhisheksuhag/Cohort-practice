// const str= "hello world, this is the javascript basics";
// console.log(str.split(" "));


// const str= "hello world, this is the javascript basics";
// console.log(str.split(","));




// const str= "   Hello World, this is the javascript basics";
// console.log(str.toLowerCase());



// Parse Int

// const a= "av32";
// const b= "67agfjo";
// const c ="2jd3kj";

// console.log(parseInt(a));
// console.log(parseInt(b));
// console.log(parseInt(c));



// Array manipulation

// const initialArray = [1,2,3,4,4,4,4,4];
// const secondArray =[5,6,7,8];

// // initialArray.unshift(5);
// // console.log(initialArray.concat(secondArray));

// // for(let i=0;i<initialArray.length;i++){
// //     console.log(initialArray[i]);

// // }
// function logThing(str){
//     console.log(str);
    
// }

// initialArray.forEach(logThing);



// class Animal{
//     constructor(naame, legCount, speaks) {
//         this.name = naame;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }
// }

// let cat = new Animal("cat", 4, "meow meow");

// console.log(cat);


// DATE MANIPULATION
// const currentDate = new Date();
// console.log(currentDate);


// function calculateSum(){
//     let a= 0;

//     for (let i=0;i< 1000000;i++){
//         a= a+1;
//     }
//     return a;
// }

// const beforeDate = Date.now();

// calculateSum();


// const afterDate = Date.now();


// console.log(afterDate - beforeDate);



// Json manipulation
// JSON.parse
// JSON.stringfy

// const user = {
//     name: "abhishek",
//     age: 21, 
//     place:"gurgaon",
// }

// const finalString = JSON.stringify(user);
// console.log(finalString);


// Object manipulation

// const user = {
//     name: "abhishek",
//     age: 21, 
//     place:"gurgaon",
// }

// function objectMethods(obj){
//     console.log("Original obj: ", obj);

//     let keys = Object.keys(obj);
//     console.log("after object.keys(): ", keys);

    
//     let values = Object.values(obj);
//     console.log("after object.values(): ", values);

    
//     let entries = Object.entries(obj);
//     console.log("after object.entries(): ", entries);

// }

// objectMethods(user);







// create a counter in javascript( counts down from 30 to 0)
// function counter(){
//     let count = 30;
//     console.log(count);

//     const timer = setInterval(function(){
//         count--;
//         console.log(count);
//         if(count<=0){
//             clearInterval(timer);
//         }
//     },1000);

// }
// counter();





//calculate the time it takes between a setTimeout call and the inner function actually running


// const currentDate = new Date();
// function timer(){
//     let inner = new Date();

//     console.log("a");
//     let outer = new Date();
//     console.log(outer - inner);
//     console.log(outer - currentDate);

// }
// const initial = currentDate.getMilliseconds();
// setTimeout(timer, 1000);

// const final = currentDate.getMilliseconds();

// const diff = final - initial;
// console.log(diff);




// create a terminal clock ( hh:mm:ss)

// let something= 0;
// let id ;

// function timeline(){
//     const x= new Date();
//     const hour= x.getHours();
//     const minutes = x.getMinutes();
//     const seconds = x.getSeconds();
//     process.stdin.setEncoding ("utf-8")
//     process.stdout.write(`${hour} : ${minutes} : ${seconds}\r`);
// something++;
// if(something == 10){
//     clearInterval(id);


// }
// }


// id = setInterval(timeline, 1000);




// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function calculate(a,b, opp){
//     const val1= opp(a);
//     const val2= opp(b);

//     return val1 + val2;
// }

// console.log(calculate(1,2, square));

// async function getAllUsers(){
//     try { const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     } catch (error){
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();

// fetch("https://api.github.com/users/abhisheksuhag")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     if(!data.location)console.log("No location found");
//     else {console.log(data.location);}
// })
// .catch((error)=> console.log(error));

// const arr = [1,2];
// const [a,b ] = arr;
// console.log( a);
// console.log(b);

// const obj = {
//     name: "abhi",
//     normal: function(){ console.log(this.name)},
//     arrow: ()=>{
//          console.log(this.name)
//     }
// }
// obj.normal();
// obj.arrow();
// normal funciton can be used as a constructor with new keyword 
// but arrow function cannnot be used as a constructor. ( throws type error)
// normal -> require return keyword for any return value
// arrow-> can return value in the expression is of single line. 


// sayHi();
// function sayHi(){};
// this works as funciton can be hoisted

// greett();
// const greett = function sayHi(){};
// this does not work as function expression cannot be hoisted.


// IIFE
// (function(){
//     console.log("runs instantly");
// })();


//  Template Literals
// const name ="Abhishek";
// console.log(`Hi, my name is ${name}`);

// doTask(()=> console.log("Hi"));

// promise
// doTask().then(()=> console.log("done")).catch(err=>console.log(err));

// async/await

// async function run(){
//     try {
//         await doTask();
//         console.log("done");
//     }catch(e){
//         console.log(e);
//     }
// }

// maps
// const numbers = [1,2,3,4,5];
// const triple = numbers.map(num=> {return num* 3});
// console.log(triple);

// filter method
// const numbers = [1,2,3,4,5];
// const greaterThan3= numbers.filter((num)=>{
//     return num>3;
// })
// console.log(greaterThan3);

// reduce 
const numbers = [1,2,3,4,5];
const sumOfAll = numbers
    .map(num=>num*3)
    .reduce((acc, curr)=> acc+ curr, 0 )
    .filter((num)=> num>4);
console.log(sumOfAll);