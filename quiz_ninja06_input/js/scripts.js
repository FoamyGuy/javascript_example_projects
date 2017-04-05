var quiz = {
"name":"Super Hero Name Quiz",
"description":"How many super heroes can you name?",
"question":"What is the real name of ",
"questions": [
{ "question": "Superman", "answer": "Clarke Kent" },
{ "question": "Batman", "answer": "Bruce Wayne" },
{ "question": "Wonder Woman", "answer": "Dianna Prince" }
]
}



//// dom references ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $answer_input = document.getElementById("answer-input");

/// view functions ///

function update(element,content,klass) {
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if(klass) {
    p.className = klass;
  }
}

play(quiz);

//// function definitions ////


function play(quiz){
  var score = 0 // initialize score
	var curIndex = 0;
  update($score,score);

	question = quiz.questions[curIndex].question;
	console.log(question);
	ask(question);

  
  // nested functions
	
	$answer_input.onkeypress = function(e){
    var keyCode = e.keyCode;
    if (keyCode == '13'){
      // Enter pressed
			check($answer_input.value);
			
			curIndex++;
			if(isGameOver() == false){
				question = quiz.questions[curIndex].question;
				ask(question);
			}else{
				gameOver();
			}

      return false;
    }
  }
	
	function isGameOver(){
		if (curIndex >= quiz.questions.length){
			return true;
		}else{
			return false;
		}
	}
	
  function ask(question) {
    update($question,quiz.question + question);
  }
	
	

  function check(answer) {
    if(answer === quiz.questions[curIndex].answer){
      update($feedback,"Correct!","right");
      // increase score by 1
      score++;
      update($score,score)
    } else {
      update($feedback,"Wrong!","wrong");
    }
  }

  function gameOver(){
    // inform the player that the game has finished and tell them how many points they have scored
    update($question,"Game Over, you scored " + score + " points");
  }
}
