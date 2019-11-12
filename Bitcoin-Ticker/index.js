const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.post("/",(req,res)=>{

    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalURL = baseURL + crypto + fiat;
  request(finalURL,(error,response,body)=>{
    var data = JSON.parse(body);
    var price = data.last;
    var date = data.display_timestamp;

    res.write("<p>The current date is " + date + "</p>");
    res.write("<h1>The current price of "+" " +crypto+" is " + price+" " +fiat +"</h1>");
    res.send();
  });

});

app.listen(3000,()=>{
  console.log("Server started on port 3000");
})
