const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+ b;
    res.send(sum.toString());
});

app.get("/interest", ( req, res)=>{
    const principal =  parseInt(req.query.principal);
    const rate =  parseInt(req.query.rate);
    const time  = parseInt(req.query.time);

    const amount = (principal * rate * time) / 100;
    res.send(amount.toString());
})

app.listen(8000);