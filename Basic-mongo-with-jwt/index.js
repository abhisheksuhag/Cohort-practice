require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const JWT_SECRET = "djfkjgkdfjhgksdf";
app.use(bodyParser.json());  //  body parser is used to make the incoming body of HTTP request convert to json object.
// app.use(express.json());  this also acts as a middleware for parsing JSON
app.use(express.urlencoded({extended: true})); // build in middleware for parsing URL-encoded data

app.use("/admin", adminRouter);
app.use("/user", userRouter);
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

modules.export = JWT_SECRET;