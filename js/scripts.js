// Back-end logic
var currentQuestion = 1;
var currentScore = 1000;
var currentQuestionString = "#question2";
var name = "";

console.log(currentQuestion);
console.log(currentScore);
console.log(currentQuestionString);

var processScore = function(scoreToProcess) {
  var scoreAsString = scoreToProcess.toString();
  var option1 = scoreAsString.charAt(3);
  var option2 = scoreAsString.charAt(2);
  var option3 = scoreAsString.charAt(1);
  alert(option1 + option2 + option3)
  if (option1 >= option2 && option1 >= option3) {
    return "option1";
  }
  else if (option2 >= option1 && option2 >= option3) {
    return "option2";
  }
  else if (option3 >= option2 && option3 >= option1) {
  return "option3";
  }
 else {
    console.log("An error occured while processing the score.");
  }
};



// Front-end logic
$(function() {

  $("#question1").submit(function(event) {

    event.preventDefault();
    var name = $("#answer" + currentQuestion).val();
    $(".append-name").prepend(name);
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
    console.log(name)

  });

  $(currentQuestionString).submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
  });

  $("#question3").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
    console.log(name)
  });

  $("#question4").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
  });

  $("#question5").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
  });

  $("#question6").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
  });

  $("#question7").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)
  });

  $("#question8").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString);
  });

  $("#question9").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString);
    var winningOption = processScore(currentScore);
    $(".survey-text").hide();
    alert(winningOption)
    if (winningOption === "option1") {
      $(".vacation1").show()

    }
    else if(winningOption === "option2") {
      $(".vacation2").show()
    }
    else if(winningOption === "option3") {
      $(".vacation3").show()
    } else {
      console.log("An error occured while displaying the winner.");
    }
  });

});
