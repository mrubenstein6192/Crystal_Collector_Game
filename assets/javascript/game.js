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
    $("#crystals").empty();
    targetNumber = Math.floor(Math.random()*102)+19;
    // redCrystalValue = Math.floor(Math.random()*12)+1;
    // blueCrystalValue = Math.floor(Math.random()*12)+1;
    // greenCrystalValue = Math.floor(Math.random()*12)+1;
    // yellowCrystalValue = Math.floor(Math.random()*12)+1;
    // crystalNumbers = [redCrystalValue, blueCrystalValue, greenCrystalValue, yellowCrystalValue];
    counter = 0;
    $("#target-score").text(targetNumber);
    $("#counter").text(counter); 
    for (var i = 0; i < 4; i++) {
    crystalValue = Math.floor(Math.random()*12)+1;
    imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image col-3");
    imageCrystal.attr("src", `assets/images/image${i}.jpg`);
    imageCrystal.attr("data-crystalvalue", crystalValue);
    $("#crystals").append(imageCrystal);
  }
  }
  
 
    $(document).on("click", ".crystal-image", function(){

      console.log("click");
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
  newGame();
  });

