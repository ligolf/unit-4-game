//setting initial variables to track at start of the game
var wins = 0;
var losses = 0;
var userScore = 0;

//this will generate a random number for the user to add up to
//value of number is with the 19-120 range
var compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//this will display that number to the user
$("#randomCompGen").html('Random Number: ' + compNumber);

//this will generate a random value for the crystals
//user will not see the value
var rock1 = Math.floor(Math.random() * 12) + 1;
var rock2 = Math.floor(Math.random() * 12) + 1;
var rock3 = Math.floor(Math.random() * 12) + 1;
var rock4 = Math.floor(Math.random() * 12) + 1;

//creates a reset function when the game round has ended
function reset(){
    userScore = 0;
    $('#currentScore').html(userScore);
    compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomCompGen").html('Random Number: ' + compNumber);
    rock1 = Math.floor(Math.random() * 12) + 1;
    rock2 = Math.floor(Math.random() * 12) + 1;
    rock3 = Math.floor(Math.random() * 12) + 1;
    rock4 = Math.floor(Math.random() * 12) + 1;
};

//conditional statement to check whether score is equal to or over the set compNumber
function gameCheck(){
    if (userScore == compNumber){  //add point to Wins and resets the game for new round
        wins++;
        $('#win').html('Wins: '+ wins);
        alert("Good Job!");
        reset();
    }
    else if (userScore > compNumber){ //add point to Losses and resets the game for new round
        losses++;
        $('#lose').html('Losses: '+ losses);
        alert("Why don't we try that again?");
        reset();
    }
}

//assigning the values to the images and waits for event click from user 
//adds to the current score and displays the newest score
//runs gameCheck which has the reset nested within it

$('#rock1-button').click(function(){
    userScore = userScore + rock1;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#rock2-button').click(function(){
    userScore = userScore + rock2;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#rock3-button').click(function(){
    userScore = userScore + rock3;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#rock4-button').click(function(){
    userScore = userScore + rock4;
    $('#currentScore').html(userScore);
    gameCheck();
});