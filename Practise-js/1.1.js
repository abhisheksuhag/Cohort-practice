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




