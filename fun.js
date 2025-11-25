// function calculate (a, b, fntocall){
//     if(fntocall== "plus"){
//         const value= sum(a,b);
//         return value;
//     }
//     if(fntocall== "minus"){
//         const value= sub(a,b);
//         return value;
//     }
// }

// function sum(a,b){
//     console.log(a + b);
// }

// function sub(a,b){
//     console.log(a - b);
// }

// const ab= calculate(1,2, "plus");
// return ab;


// function calculate (a, b, fntocall){
//     const ans= fntocall(a,b);
//     return ans;
// }

// function sum(a,b){
//     console.log(a + b);
// }

// function sub(a,b){
//     console.log(a - b);
// }

// const ab= calculate(1,2, sub);
// return ab;



// PROMISE
// var d= new Promise(function(resolve){

//         resolve("hello world")

// });

// function callback(){
//     console.log(d);
// }

// console.log(d);
// d.then(callback);

// const d= new Promise(function(resolve){
//     console.log("yoo");
// });

// d.then(function(){
//     console.log(d);
// })

// function Abhishek(){
//     const d= new Promise(function(resolve){
//         resolve("yoozxvo");
//     });
//     return d;
// }

// function main (){
//     Abhishek().then(function(value){
//         console.log(value);
//     });
// }

// main();


// const personArray= [ "hello", "hi", "hey"];
// const genderArray = [ "male", "female" , "male"];

// for( let i=0; i<personArray.length;i++){
//     if (genderArray[i] == "male")
//     {
//         console.log(personArray[i]);
//     }
// }



// const allUsers= [ {
//     firstName: "Abhishek",
//     gender: "Male"
// }, {
//     firstName: "yamam",
//     gender: "Male"
// } ,{
//     firstName: "Priya",
//     gender: "Female"
// }];

// for( let i=0; i<allUsers.length;i++){
//     if(allUsers[i]["gender"] == "Male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }




// function sum(a, b){
//     return a + b;
// }

// const value = sum(3,4);
// console.log(value);



// function sum(num1, num2, fnToCall){
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log("I am using callback functions now " + data)
//     console.log("result of the sum is : " + data);
// }


// function displayResultPassive(data){
//     console.log("sum's result is  : " + data);
// }

// // you are only allowed to call one function after this
// // How will you display Result of a sum

// // const ans= sum(1,2);
// // displayResult(ans);

// const ans= sum(1,2 , displayResult);



// arthemetic callbacks 
// function calculateArithmetic( a, b, type){
//     const ans = type(a,b);
//     return ans;  
// }

// function sum(a,b){
//     return a+b;
// }
//  function subtract(a,b){
//     return a-b;
//  }

// function multiply(a,b){
//     return a*b;
// }


// const value = calculateArithmetic(2,9, subtract);
// console.log(value);



// function greet(){
//     console.log("hello world");
// }

// function greetAliens(){
//     console.log("hello Aliens");
// }

// setTimeout(greetAliens, 1 * 2000);
// greet();


// function asyncfunctionn(){
//     let p = new Promise(function(resolve){
//     resolve("hi there");
// });
// return p;
// }

// const value= asyncfunctionn();
// value.then(function(data){
//     console.log(data);
// })



// function asyncfunctionn(){
//     console.log("yeahh!")
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('hi there')
//         }, 2000)
//     });
//     return p;
// }

// async function main(){
//     let value = await  asyncfunctionn()
//     setTimeout(function(){
//         console.log("yooo mama!");
//     },2000);
//     console.log(value);
    
// }
// console.log("1");
// main();
// console.log("2");



// function abc(){
//     let p = new Promise(function(resolve){
//         resolve("hi there!");

//     });
//     return p;
// }


// async function main(){
//     const value=await abc();
//     console.log(value);
// }

// main();


// function ownSetTimeout(fn, time){
//     setTimeout(fn, time);
// }

// ownSetTimeout(function(){
//     console.log("heyyy!");
// },5000);


// function ownSetTimeout(duration){
//     const p= new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
//     return p;
// }

// ownSetTimeout(5000)
// .then(function(){
//     console.log("after 2 second");
// })


// function ownPromise(duration){
//     const p= new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         },duration);
//     });
//     return p;
// }

// const done= ownPromise(2000);
// done.then(function(){
//     console.log("hi there");
// })


// function getData(duration){
//     const p= new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         },duration);
//     });
//     return p;
// }

// const ans = getData(1000);
// ans.then(console.log("Data Recieved"));

// function promisedfn(duration){
//     const p= new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         }, duration);
//     });
//     return p;
// }

// const done =promisedfn(2000);
// done.then(function(){
//     console.log("hi there");
// });




// async function main(){
//     try{
//         const user= await getUser();
//         const profile = await getProfile(user.id);
//         console.log(profile);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// main();


// async function fetch1() {
//   return new Promise((res) => setTimeout(() => res("One"), 1000));
// }
// async function fetch2() {
//   return new Promise((res) => setTimeout(() => res("Two"), 1000));
// }


// async function main(){
//     const [res1, res2] = await Promise.all([fetch1(), fetch2()]);
//     console.log(res1);
//     console.log(res2);
// }

// 6. Real-world logic: Retry on failure
// Write a function retry(fn, retries) that tries to run an async function fn and retries up to retries times if it fails.

// async function retry(fn, retries) {
//     try {
//         await fn();
//     } catch (error) {
//         if (retries > 0) {
//             console.log("Retries left", retries);
//             return retry(fn, retries - 1);
//         }
//         console.log(error);
//     }
// }

// retry(
//     () =>
//         new Promise((res, rej) =>
//             setTimeout(() => rej("Can't handle it"), 1000),
//         ),
//     4,
// );




// const d = new Date();
// console.log(Date);
// console.log(d);

// const p = new Promise(function(resolve){
//     resolve("hi there");

// });

// console.log(Promise);
// const ab = p.then(function(done){
//     console.log(done);
// });

// ab;

// const myObject = {
//     cpp: "C++",
//     sft: "swift",
//     rb: "ruby on rails"
// }

// for (const key in myObject) {
    // console.log(myObject[key]);
//     console.log(`${key} is the shortcut for ${myObject[key]}`);
// }

// for loop in js-
// can use simple for loop and while loop on anything in js
// but for objects and arrays, there are some specials loops
// like for array(this for of will not work on object) - for (const element of object) {
    
// }

// like for object-  for (const key in object) {    
// }

// const coding = ["ruby", "java", "python", "cpp"];

// coding.forEach(function (names){
//     console.log(names);
// });

// coding.forEach((names)=>( console.log(names)))

// function printMe(names){
    // console.log(names);
// }
// coding.forEach(printMe);


// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=> console.log(item));

// function printMe(val){
//     // console.log(val);
// }
// // coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     // console.log(item, index, arr);
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach((item)=> console.log(item.languageName))