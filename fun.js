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



function asyncfunctionn(){
    console.log("yeahh!")
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve('hi there')
        }, 2000)
    });
    return p;
}

async function main(){
    let value = await  asyncfunctionn()
    setTimeout(function(){
        console.log("yooo mama!");
    },2000);
    console.log(value);
    
}
console.log("1");
main();
console.log("2");
