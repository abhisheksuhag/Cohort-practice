const express = require("express");
const app= express();

// counter the increment server

// let counter =0;

// app.use((req, res, next)=>{
//     counter++;
//     console.log(`request counter : ${counter}`);
//     next();
// });

// app.use((req, res)=>{
//     res.send("updated the counter");
// });



let totalTime= 0;
let requestCount =0;

app.use((req, res, next)=>{
    requestCount++;
    console.log(`Request count: ${requestCount}`);
    next();
});

app.use((req, res, next)=>{
    const startTime= Date.now();

    res.on("finish", ()=>{
        const duration = Date.now() - startTime;
        totalTime +=duration;
        const avgTime = totalTime/ requestCount;
        console.log(`Average duration : ${avgTime}`);
    });
     next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });


app.listen(3000);