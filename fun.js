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

function Abhishek(){
    const d= new Promise(function(resolve){
        resolve("yoozxvo");
    });
    return d;
}

function main (){
    Abhishek().then(function(value){
        console.log(value);
    });
}

main();