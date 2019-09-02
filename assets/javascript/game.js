$(document).ready(function(){
    //Have random number generate between 19-120 Computer Choice at game start,; reset after each Win/Loss 
    var computerChoice = Math.random() * (120 - 19) + 19; 
        console.log(Math.floor(computerChoice));

    //Create click events for each Gem button to generate random number 1-12 and store value for each click; reset after game win/loss
    //Each button's value must add to together and display on counter
    $(".button-one").on("click", function(event){
        console.log(event);
    })
    $(".button-two").on("click", function(event){
        console.log(event);
    })

    //Create a Reset function; must regenerate Computer Choice and all Gem Choice values, and reset current game score counter
    //Create conditions for Wins Losses and display on Game Counter, apply reset
})