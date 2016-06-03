// Back-end logic
var currentQuestion = 1;
var currentScore = 1000;
var currentQuestionString = "#question2";
var name = "";
console.log(currentQuestion);
console.log(currentScore);
console.log(currentQuestionString);

var setQuestionString = function(num) {
  console.log(currentQuestionString);
  stringNumber = num.toString();
  currentQuestionString = "#question" + stringNumber;
  console.log(currentQuestionString);
}

var processScore = function(scoreToProcess) {
  var scoreAsString = scoreToProcess.toString();
  var option1 = scoreAsString.charAt(3);
  var option2 = scoreAsString.charAt(2);
  var option3 = scoreAsString.charAt(1);
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
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentQuestionString)
    console.log(name)

    $(currentQuestionString).submit(function(event) {
      event.preventDefault();
      var response = parseInt($("#answer" + currentQuestion).val());
      currentScore += response;
      $("#question" + currentQuestion).hide();
      currentQuestion ++;
      setQuestionString(currentQuestion)
      $("#question" + currentQuestion).show();
      console.log(currentScore);

      console.log(currentQuestionString)

        $(currentQuestionString).submit(function(event) {
          event.preventDefault();
          var response = parseInt($("#answer" + currentQuestion).val());
          currentScore += response;
          $("#question" + currentQuestion).hide();
          currentQuestion ++;
          setQuestionString(currentQuestion)
          $("#question" + currentQuestion).show();
          console.log(currentScore);
        });

    });

  });

  $("#question4").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentScore);
  });


  $("#question5").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentScore);
  });

  $("#question6").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentScore);
  });

  $("#question7").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentScore);
  });

  $("#question8").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentScore);
  });

  $("#question9").submit(function(event) {
    event.preventDefault();
    var response = parseInt($("#answer" + currentQuestion).val());
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    setQuestionString(currentQuestion)
    $("#question" + currentQuestion).show();
    console.log(currentScore);
    var winningOption = processScore(currentScore);
    $(".survey-text").hide();
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
