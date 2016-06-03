// Back-end logic
var currentQuestionString = "#question1";
var name = "";
var currentQuestion = 1;
var currentScore = 1000;
var hogwarts = false;
//For currentScore: the ones place signifies the real world, the tens place signifies a fantasy world, the hundreds place signifies a science fiction world.

var setQuestionString = function(num) {
  stringNumber = num.toString();
  currentQuestionString = "#question" + stringNumber;
};

var processScore = function(scoreToProcess) {
  var scoreAsString = scoreToProcess.toString();
  var option1 = scoreAsString.charAt(3);
  var option2 = scoreAsString.charAt(2);
  var option3 = scoreAsString.charAt(1);
  if (option1 === option2 && option2 > option3 && hogwarts === true) {
    return "hogwarts";
  } else if (option1 >= option2 && option1 >= option3) {
    return "option1";
  } else if (option2 >= option1 && option2 >= option3) {
    return "option2";
  } else if (option3 >= option2 && option3 >= option1) {
  return "option3";
  } else {
    console.log("An error occured while processing the score.");
  }
};

// Front-end logic
$(function() {

  $(currentQuestionString).submit(function(event) {
    event.preventDefault();
    var name = $("#answer" + currentQuestion).val();
    $(".append-name").prepend(name);
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).show();

    $(currentQuestionString).submit(function(event) {
      event.preventDefault();
      var response = parseInt($("#answer" + currentQuestion).val());
      currentScore += response;
      $("#question" + currentQuestion).slideToggle();
      currentQuestion ++;
      setQuestionString(currentQuestion);
      $("#question" + currentQuestion).slideToggle();

        $(currentQuestionString).submit(function(event) {
          event.preventDefault();
          var response = parseInt($("#answer" + currentQuestion).val());
          currentScore += response;
          $("#question" + currentQuestion).slideToggle();
          currentQuestion ++;
          setQuestionString(currentQuestion);
          $("#question" + currentQuestion).slideToggle();
        });
    });
  });

  $("#question4").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).slideToggle();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).slideToggle();
    console.log(currentScore);
  });

  $("#question5").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).slideToggle();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).slideToggle();
    console.log(currentScore);
  });

  $("#question6").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).slideToggle();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).slideToggle();
    console.log(currentScore);
  });

  $("#question7").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).slideToggle();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).slideToggle();
    console.log(currentScore);
  });

  $("#question8").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).slideToggle();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).slideToggle();
    console.log(currentScore);
  });

  $("#question9").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    if (response === 10) {hogwarts = true}
    currentScore += response;
    $("#question" + currentQuestion).slideToggle();
    currentQuestion ++;
    setQuestionString(currentQuestion);
    $("#question" + currentQuestion).slideToggle();
    console.log(currentScore);
    //The rest of this script should be placed in the submit function of the final question.//
    var winningOption = processScore(currentScore);
    $(".survey-text").hide();
    if (winningOption === "option1") {
      $(".vacation1").fadeIn();
    } else if(winningOption === "option2") {
      $(".vacation2").fadeIn();
    } else if(winningOption === "option3") {
      $(".vacation3").fadeIn();
    } else if(winningOption === "hogwarts") {
      $(".hogwarts").fadeIn();
    } else {
      console.log("An error occured while displaying the winner.");
    }
  });
});
