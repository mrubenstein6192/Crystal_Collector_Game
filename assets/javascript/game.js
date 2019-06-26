$(document).ready(function() {

  $("#gameplay").hide();
  // Create variables
  var targetNumber;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var numberOptions = [];
  var gameRunning = false;

  // Create variables targeting HTML elements
  var $targetNumber = $("#targetNumber");
  var $totalScore = $("#totalScore");
  var $wins = $("#wins");
  var $losses = $("#losses");
  var $crystals = $("#crystals");
  var $crystalImage = $(".crystalImage");
  var $newGameBtn = $("#newGameBtn");
  
  function newGame(){
    $("#crystals").empty();
    $("#gameplay").show();
    gameRunning = true;
    
    // Select a random target number and write to page
    targetNumber = Math.floor(Math.random() * 76) + 25;
    $targetNumber.text(targetNumber);
  
    // Reset numberOptions array
    numberOptions = [];
  
    // Select random number and push to numberOptions array
    for (var i = 0; i < 4; i++) {
      var randomNumber = 1 + (Math.floor(Math.random() * 10));
      numberOptions.push(randomNumber);
    };

   // Reset total score
   totalScore = 0;
   $totalScore.text(totalScore);


    for (var i = 0; i < 4; i++) {
    crystalValue = Math.floor(Math.random()*12)+1;
    imageCrystal = $("<img>");
    imageCrystal.addClass("crystalImage col-3");
    imageCrystal.attr("src", `assets/images/image${i}.jpg`);
    imageCrystal.attr("data-crystalvalue", crystalValue);
    $("#crystals").append(imageCrystal);
  }
  }
  
 
    $(document).on("click", ".crystalImage", function() {

    if (!gameRunning) {
      alert(`Click button to start a new game!`);
      return false;
    };

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    // Add points to total score, and write to page
    totalScore += crystalValue;
    $totalScore.text(totalScore);
  
    // WIN-LOSE LOGIC
    // If total score === target score, user wins; add 1 to wins and write to page
    if (totalScore === targetNumber) {
      wins++;
      $wins.text("Wins: " + wins);
      gameRunning = false;
    }
    // If total score > target score, user loses; add 1 to losses and write to page
    else if (totalScore > targetNumber) {
      losses++;
      $losses.text("Losses: " + losses);
      gameRunning = false;
    };
    
  });
  
  // Add event listner to new game button to run newGame()
  $newGameBtn.on("click", newGame);

});
