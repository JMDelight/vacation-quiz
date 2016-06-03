
    while (currentQuestion < 10) {
      $(currentQuestionString).submit(function(event) {
        event.preventDefault();
        var response = parseInt($("#answer" + currentQuestion).val());
        currentScore += response;
        $("#question" + currentQuestion).hide();
        currentQuestion ++;
        setQuestionString(currentQuestion)
        $("#question" + currentQuestion).show();
    })
  }

    if (currentQuestion === 10) {
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
    }
  })
})
