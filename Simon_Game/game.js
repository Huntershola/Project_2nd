var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){
    if(!started){

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
});



$(".btn").click(function(){

 var userChosenColour = $(this).attr("id");

 userClickedPattern.push(userChosenColour);

 playSound(userChosenColour);
 animatePress(userChosenColour);

 checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        console.log("success");
      if(userClickedPattern.length === gamePattern.length){

        setTimeout(function(){

            nextSequence();
        }, 1000);
      }
    } else {

        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },  200);

        $("#level-title").text("Game Over, Press Any Key to Restart");


        startOver();
    }
}

// 1. Inside the game.js file create a new function called nextSequence()

function nextSequence(){


  userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

  // 2. Generate a new random number between 0 and 3,

 var  randomNumber = Math.floor(Math.random() * 4);

  // 4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from buttonColours array.
  
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);


 
}

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
   
}

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");


    setTimeout(function(){

    $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver(){

    level  = 0;
    gamePattern = [];
    started = false;
}