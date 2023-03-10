var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var quizForm = document.getElementById("quiz-form");
var submitBtn = document.getElementById("submit");
var restartBtn = document.getElementById("restart");
var resultsEl = document.getElementById("results");
var scoreEl = document.getElementById("score");
var questionContainers = document.getElementById("quiz-question");
var secondsLeft = 60; // Two minute quiz
var index = 0
var questionOptions = document.querySelector("#question-options")
var questionBank = [
  {
    prompt: "What is JavaScript?",
    options: [
      {
        value: "A scripting language used for creating interactive webpages",
        isCorrect: true,
      },
      {
        value: "A video game",
        isCorrect: false,
      },
      {
        value: "An indie movie",
        isCorrect: false,
      },
      {
        value: "A type of computer", 
       isCorrect: false,
      }
    ],
  },
  {
    prompt: "What does CSS stand for?",
    options: [
      {
        value: "Cascading Style Sheet",
        isCorrect: false,
      },
      {
        value: "Crawling Sneaky Snakes",
        isCorrect: true,
      },
      {
        value: "Couch Sitting Sod",
        isCorrect: false,
      },
      {
        value: "Child Swinging Sounds",
        isCorrect: false,
      }
    ],
  },
  {
    prompt: "What does HTML stand for?",
    options: [
      {
        value: "HyperText Markup Language",
        isCorrect: true,
      },
      {
        value: "HyperText Markup Log",
        isCorrect: false,
      },
      {
        value: "HyperText Markup Latitude",
        isCorrect: false,
      },
      {
        value: "HyperText Magic Language",
        isCorrect: false,
      }
    ],
  },
  {
    prompt: "What is HTML used for?",
    options: [
      {
        value: "Web development",
        isCorrect: false,
      },
      {
        value: "Internet navigation",
        isCorrect: false,
      },
      {
        value: "Web documentation",
        isCorrect: false,
      },
      {
        value: "All Of The Above",
        isCorrect: true,
      }
    ],
  },
  {
    prompt: "What is HTML used for?",
    options: [
      {
        value: "Web development",
        isCorrect: false,
      },
      {
        value: "Internet navigation",
        isCorrect: false,
      },
      {
        value: "Web documentation",
        isCorrect: false,
      },
      {
        value: "All Of The Above",
        isCorrect: true,
      }
    ],
  }
]
var myLastIndex = questionBank.length -1

// Function to start the timer
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Function to show all questions
function showQuestion() {
  //show the current questions
  var currentQuestion = questionBank[index]
  var questionElement = document.getElementById("prompt")
  questionElement.innerHTML =  questionBank[index].prompt
  var answersElement = document.getElementById("question-options")
  answersElement.innerHTML = ""
for(let i=0; i < questionBank[index].options.length; i++){
  var button = document.createElement("button")
  button.addEventListener("click", checkAnswer)
  button.innerHTML = questionBank[index].options[i].value
  button.setAttribute("isCorrect", questionBank[index].options[i].isCorrect)
  answersElement.append(button)

}
  // questionContainers.forEach(function (container) {
  //   container.style.display = "block";
  // });
}
  // Calculate and display user score
function checkAnswer(event){
  event.preventDefault()
  
  //var numCorrect = 0;
  //var userAnswers = new FormData(quizForm);
 // for (var pair of userAnswers.entries()) {
   // if (pair[1] === "a") {
   //   numCorrect++;
   // }

}


 // {
 //   var scorePercentage = Math.round((numCorrect / 5) * 100);
//  scoreEl.textContent = "You scored " + scorePercentage + "%";
 // resultsEl.style.display = "block";
//  }


questionOptions.addEventListener("click", function (event){
console.log(event.target.getAttribute("isCorrect"))
index++;

if (index < questionBank.length){
  if(event.target.getAttribute("isCorrect") === "true"){
    console.log("IsTrue")
    var Message = document.createElement("p");
    Message.textContent = "True"
    questionContainers.appendChild(Message) 
  } else {
    console.log("IsFalse")
    var Message = document.createElement("p");
    Message.textContent = "Wrong"
    Message.removeChild
    questionContainers.appendChild(Message) 
  }
 
  setTimeout:( function (){
    console.log("Delayed for 1 seconds.");
  questionContainers.removeChild(Message)
      showQuestion();
    }, 1000);
}
})
// Event listener for start button click
startBtn.addEventListener("click", function (event) {
  event.preventDefault()
  // Hide start button and quiz instructions
  //startBtn.style.display = "none";
  document.getElementById("quiz-instructions").style.display = "none";

  // Start timer and show questions
  startTimer();
  index = 0
  showQuestion();
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault()
  // Hide start button and quiz instructions
  submitBtn.style.display = "none";
  document.getElementById("quiz-instructions").style.display = "none";

  // Start timer and show questions
  startTimer();
  index = 1
  showQuestion();
});

// // Event listener for submit button click
// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent form from submitting
//   endQuiz();
// });

// // Event listener for restart button click
// restartBtn.addEventListener("click", function () {
//   // Reset quiz and start over
//   secondsLeft = 120;
//   timerEl.textContent = "Time remaining: " + secondsLeft;
//   quizForm.reset();
//   resultsEl.style.display = "none";
//   questionContainers.forEach(function (container) {
//     container.style.display = "none";
//   });
//   startBtn.style.display = "block";
//   document.getElementById("quiz-instructions").style.display = "block";
// });
function endQuiz() {
  // Hide quiz form and timer
  quizForm.style.display = "none";
  timerEl.style.display = "none";
}
  // Calculate and display use