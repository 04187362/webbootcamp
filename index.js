const express = require('express');
const bodyParser = require('body-parser');

//The express app
const app = express();
//The bodyParser middleware
app.use(bodyParser.urlencoded({extended:true}));
//The different routes
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html");
})
app.post("/",(req,res)=>{
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send("The result is " + result);
})

app.get("/bmiCalculator",(req,res)=>{
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator",(req,res)=>{
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight/(height*height);
  res.send("The bmi is : " + bmi);
})

app.listen(3000,()=>{
  console.log("Server started on port 3000");
})
