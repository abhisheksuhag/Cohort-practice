// const express= require("express")
// const port = 3000;
// const app= express();

// app.get('/system', function(req, res){
//     res.send("yo buddy, this is express basics ")
// })

// app.get("/router", function(req, res){
//     res.json({
//         name:"abhishek",
//         kaam: "Apne kaam t kaam rakhna",
//         age: "sab janna hai iss bhadve ko",
//     })
// })

// app.get("/", function(req, res){
//     res.json({
//         name:"Maja ladle",

//     })
// })


// app.listen(port)


// const express=  require("express");
// const app= express();

// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans +=i;
//     }
//     return ans;
// }


// app.get("/", function(req,res){
//     const n= req.query.n;
//     const ans= sum(n);
//     res.send("hey buddy, the sum is " + ans);
// })
// app.listen(3000);





const express= require("express");
const app= express();

const users= [{
    name : "john",
    kidneys: [{
        healthy: false,
    }]
}]

app.use(express.json());

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
      if (johnKidneys[i].healthy) {
        numberOfHealthyKidneys += 1;
      }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
      numberOfKidneys,
      numberOfHealthyKidneys,
      numberOfUnhealthyKidneys,
    });
  });


app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
    healthy: isHealthy,
        });
    res.json({
    msg: "Done!!",
    });
});

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "All kidneys are now healthy",
    });
  });


app.delete("/", function (req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
            healthy: true,
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "All unhealthy kidneys removed" });
});


app.listen(3000);
