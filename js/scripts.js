// Back-end logic
var currentQuestion = 1;
var currentScore = 0;
var currentQuestionString = "#question2"
var name = ""

console.log(currentQuestion);
console.log(currentScore);
console.log(currentQuestionString)

var processScore = function(input) {
  
}



// Front-end logic
$(function() {

  $("#question1").submit(function(event) {

    event.preventDefault();
    var name = $("#answer" + currentQuestion).val();


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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
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
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)

  });

  $("#question9").submit(function(event) {

    event.preventDefault();
    var responseRaw = $("#answer" + currentQuestion).val();
    var response = parseInt(responseRaw);
    console.log(response)
    console.log(typeof response)
    currentScore += response;
    $("#question" + currentQuestion).hide();
    currentQuestion ++;
    currentQuestionString = "#question" + currentQuestion
    $("#question" + currentQuestion).show();
    console.log(currentQuestion);
    console.log(currentScore);
    console.log(currentQuestionString)

  });


});
