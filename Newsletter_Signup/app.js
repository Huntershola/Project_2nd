

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")
const port = 5500;




const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html");
    
}); 

app.post("/", function(req, res){

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = 'https://us21.api.mailchimp.com/3.0/lists/4885f9bf4b' ;

    const options = {

    method: "POST",
    auth:"Shola1:d9c7adeb8c4566b5dc734d0816a847cf-us21"
    }

    const request = https.request(url, options, function(response){

        if(response.statusCode === 200){

            res.sendFile(__dirname + "/success.html");
        }
        else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })

      

    })
// request.write(jsonData);
request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.listen(port, function(){

    console.log("Server is running on port 5500");

      
});   


// Api Keys
//d9c7adeb8c4566b5dc734d0816a847cf-us21

// List Id
// 4885f9bf4b