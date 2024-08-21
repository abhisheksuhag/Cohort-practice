const express= require("express");
const zod= require("zod");
const app = express();

function validateInput(obj){
   const schema= zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
   }) 

   const response = schema.safeParse(obj);
   console.log(response);
}

validateInput({
    email: "abc@gmail.com",
    password: "systemmm"
})

app.listen(3000);