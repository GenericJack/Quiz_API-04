let playerName;
let currentQuestionIndex;
let score;
let timeLeft;
// Question bank
const quizQuestions = [
    {
        question: "Inside which HTML element do we put Javascript?",
        options: ["<javascript>", "<js>", "<script>", "<scripting>"],
        correctAnswerIndex: 1,
      },
      {
        question: "Where is the correct place to insert a Javascript?",
        options: [
          "Both the <head> section and the <body> section",
          "The <body> section",
          "The <head> section",
          "None of these."
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "An external JavaScript must contain the <script>",
        options: ["True", "False", "Maybe", "Both"],
        correctAnswerIndex: 1,
      },
      {
        question:
          'How do you write "Hello World" in an alert box? Assume double quotations are already placed around Hello World.',
        options: [
          'alert("Hello World")',
          'msgBox("Hello World")',
          'alertBox["Hello World"]',
          "Hello World",
        ],
        correctAnswerIndex: 0,
      },
      {
        question:
          "During class, which phrase does our Glorious Leader, Stanley Lewis, use to indicate our understanding of the material",
        options: [
          "prompt(Hello World)",
          "Fist to Five on that!",
          "We're cooking with gas.",
          "It's Stanley Lewising Time!",
        ],
        correctAnswerIndex: 1,
      },
  
];

function startQuiz() {
  const nameInput = document.getElementById("nameInput");
  playerName = nameInput.value || "Anonymous";
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;

  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  
  showQuestion();
  startTimer();
}

function showQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
    const questionObject = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObject.question;
    document.getElementById("optionA").textContent = questionObject.options[0];
    document.getElementById("optionB").textContent = questionObject.options[1];
    document.getElementById("optionC").textContent = questionObject.options[2];
    document.getElementById("optionD").textContent = questionObject.options[3];

    const radioButtons = document.getElementsByName("option");
    radioButtons.forEach((radio) => (radio.checked = false));

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", () => {
          const selectedAnswerIndex = parseInt(radio.value);
          const correctAnswerIndex = questionObject.correctAnswerIndex;
  
          if (selectedAnswerIndex === correctAnswerIndex) {
            score++;
          }
        });
      });

  } else {
    endQuiz();
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  const selectedAnswerIndex = parseInt(selectedOption.value);
  const correctAnswerIndex = quizQuestions[currentQuestionIndex].correctAnswerIndex;

  if (selectedAnswerIndex === correctAnswerIndex) {
    score++;
  }

  currentQuestionIndex++;
  showQuestion();
}

showQuestion();

function startTimer() {
  const timerElement = document.getElementById("time");
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("end-page").style.display = "block";

  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `${playerName}, Your score is: ${score}/${quizQuestions.length}`;
}

function showLeaderboard() {
  // Save the score and player name to the leaderboard if it's in the top 5
  
  document.getElementById("end-page").style.display = "none";
  document.getElementById("leaderboard-page").style.display = "block";
}

function restartQuiz() {
  document.getElementById("end-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  showQuestion();
  startTimer();
}

function backToStart() {
    document.getElementById("leaderboard-page").style.display = "none";
    document.getElementById("start-page").style.display = "block";
  }