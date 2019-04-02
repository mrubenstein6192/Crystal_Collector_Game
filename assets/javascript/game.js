$(document).ready(function() {

var redCrystalValue;
var blueCrystalValue;
var greenCrystalValue;
var yellowCrystalValue;

var wins = 0;
var losses = 0;
var targetNumber;
var counter;

function newGame(){

  targetNumber = Math.floor(Math.random()*102)+19;
  redCrystalValue = Math.floor(Math.random()*12)+1;
  blueCrystalValue = Math.floor(Math.random()*12)+1;
  greenCrystalValue = Math.floor(Math.random()*12)+1;
  yellowCrystalValue = Math.floor(Math.random()*12)+1;
  crystalNumbers = [redCrystalValue, blueCrystalValue, greenCrystalValue, yellowCrystalValue];
  counter = 0;
  $("#target-score").text(targetNumber);
  $("#counter").text(counter);
}

for (var i = 0; i < crystalNumbers.length; i++) {
  imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "#");
  imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
  $("#crystals").append(imageCrystal);
}
  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#totalscore").text("New Score: " + counter);
 if (counter === targetNumber){
    wins ++;
    $("#wins").text("Wins: " + wins);
    newGame();
  }
  else if (counter > targetNumber) {
    losses ++;
    $("#losses").text("Losses: " + losses);
    newGame();
  }
});

});