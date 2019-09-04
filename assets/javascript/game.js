$(document).ready(function(){
    //Have random number generate between 19-120 Computer Choice at game start,; reset after each Win/Loss 
    var targetScore = Math.floor(Math.random() * 120) +1;
    var userScore = 0;
    var winsScore=0;
    var lossScore=0;

    //display targetScore and userScore
    $("#target-score-display").text(targetScore);
    $("#current-score-display").text(userScore);
        
        
    //Create click events for each Gem button to generate random number 1-12 and store value for each click; reset after game win/loss
    var gemChoiceOne = Math.floor(Math.random() * 12) + 1;
    var gemChoiceTwo = Math.floor(Math.random() * 12) + 1;
    var gemChoiceThree= Math.floor(Math.random() * 12) + 1;
    var gemChoiceFour = Math.floor(Math.random() * 12) + 1;


    //Each button's value must add to together and display on counter
    $(".button-one").on("click", function(event){
        userScore+= gemChoiceOne;
        console.log(userScore);
    })

    $(".button-two").on("click", function(event){
        userScore+= gemChoiceTwo;
        console.log(userScore);
    })

    $(".button-three").on("click", function(event){
        userScore+= gemChoiceThree;
        console.log(userScore);
    })
    
    $(".button-four").on("click", function(event){
        userScore+= gemChoiceFour;
        console.log(userScore);
    })

    if (userScore === targetScore) {
        winScore++;
        userScore=0;
        var targetScore = Math.floor(Math.random() * 120) +1;
                
    }

    if (userScore > targetScore) {
        lossScore++;
        userScore=0;
        var targetScore = Math.floor(Math.random() * 120) +1;
    }

    //Create a Reset function; must regenerate Computer Choice and all Gem Choice values, and reset current game score counter
    //Create conditions for Wins Losses and display on Game Counter, apply reset
})