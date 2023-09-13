const { log } = require("console");
const express = require("express");
const bodyParser = require("body-parser");

const port = 5500;

const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");


});

app.post("/", function(req, res){
const query = req.body.cityName;
const apiKey = "5a241e2fb4ae305e77e9afff81b356a5";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit; 

https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", (data)=>{
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png" 

        res.write("<p> The Weather is currently " + weatherDescription + "</p>" 
        );
        res.write("<h1>The temperature in "+ query +" is " + temp + " degree Celsius.</h1>");
        res.write("<img src=" + imageURL +">"); 
        res.send()
        


    })
})



})



app.listen(port, function(){

    console.log("Server is running on port 5500.", port);
})
