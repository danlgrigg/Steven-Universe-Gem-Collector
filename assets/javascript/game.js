$(document).ready(function(){
    //Have random number generate between 19-120 Computer Choice at game start,; reset after each Win/Loss 
    var targetScore = Math.floor(Math.random() * 120) +1;
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    //display targetScore and userScore
    $("#target-score-display").text(targetScore);
    // $("#current-score-display").text(userScore);
        
        
    //Create click events for each Gem button to generate random number 1-12 and store value for each click; reset after game win/loss
    var gemChoiceOne = Math.floor(Math.random() * 12) + 1;
    var gemChoiceTwo = Math.floor(Math.random() * 12) + 1;
    var gemChoiceThree= Math.floor(Math.random() * 12) + 1;
    var gemChoiceFour = Math.floor(Math.random() * 12) + 1;


    //Each button's value must add to together and display on counter
    $(".button-one").on("click", function(event){
        userScore+= gemChoiceOne;
        $("#current-score-display").text(userScore);
        conditionChecker();
    })

    $(".button-two").on("click", function(event){
        userScore+= gemChoiceTwo;
        $("#current-score-display").text(userScore);
        conditionChecker();
    })

    $(".button-three").on("click", function(event){
        userScore+= gemChoiceThree;
        $("#current-score-display").text(userScore);
        conditionChecker();

    })
    
    $(".button-four").on("click", function(event){
        userScore+= gemChoiceFour;
        $("#current-score-display").text(userScore);
        conditionChecker();
    })
    //Create conditions for Wins Losses and display on Game Counter, apply reset
    function conditionChecker (){
        if (userScore === targetScore) {
                wins++;
                $("#wins").text(wins)
                alert("You chose...Wisely!!")
                resetGame();
                
               
            }

            if (userScore > targetScore) {
                alert("You chose...Poorly.");
                losses++;
                $("#losses").text(losses);
                resetGame();
              
               
            }
    }
        //Create a Reset function; must regenerate Computer Choice and all Gem Choice values, and reset current game score counter
    function resetGame() {
        userScore=0;
        $("#current-score-display").text(userScore)
        targetScore = Math.floor(Math.random() * 120) +1;
        gemChoiceOne = Math.floor(Math.random() * 12) + 1;
        gemChoiceTwo = Math.floor(Math.random() * 12) + 1;
        gemChoiceThree= Math.floor(Math.random() * 12) + 1;
        gemChoiceFour = Math.floor(Math.random() * 12) + 1;
        $("#target-score-display").text(targetScore);

    }

})