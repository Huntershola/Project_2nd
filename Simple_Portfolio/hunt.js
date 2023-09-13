var dataBase = [
{
    username: "Huntershola",
    password: "Godspeed"
},
{
    username: "Huntershow",
    password: "777"
},
{
    username: "Hunter",
    password: "234"
}
];

var newsFeed  = [
    {
        username : "hunter",
        timeline: "Happy Sunday guys!!!"
    },

    {
        username : "Showboy",
        timeline: "Checkout my first Coding Challenge"
    }
];
 function isUserValid(username, password){
    for(var i=0; i<dataBase.length; i++){
        if(dataBase[i].username === username &&
            dataBase[i].password === password){
                return true;
            }
    }
    return false;
 }

var userPrompt = prompt("Enter your username:");
var passwordPrompt = prompt( "Enter your password:");

function signIn(user, pass){
    
    if(isUserValid(user, pass)){
        console.log(newsFeed);
    }
    else{
        alert("wrong details");
    }
}
signIn(userPrompt, passwordPrompt)