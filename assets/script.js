// const quizContainer = document.querySelector("#quiz-container");
// const inputContainer = document.querySelector("#input-container");
// const userNameInput = document.querySelector("#userName");
// const startQuizBtn = document.querySelector("#startQuiz");
// const timerElement = document.querySelector("#timer");
// const submitBtn = document.querySelector("#submitBtn");
// const resultElement = document.querySelector("#result");
// const highScoreList = document.querySelector("#highScoreList");
// const viewHighScoresLink = document.querySelector("#viewHighScores");

// const questions = [
//     {
//         question:"Inside which HTML element do we put Javascript?",
//         options: ["<javascript, <js>, <script>, <scripting>"],
//         correctAnswer: "<script>"
//     },
//     {
//         question:"Where is the correct place to insert a Javascript?",
//         options: ["Both the <head> section and the <body> section, The <body> section, The <head> section"],
//         correctAnswer: "Both the <head> section and the <body> section"
//     },
//     {
//         question:"An external JavaScript must contain the <script>",
//         options: ["True, False"],
//         correctAnswer: "False"
//     },
//     {
//         question:"How do you write Hello World in an alert box? Assume double quotations are already placed around Hello World.",
//         options: ["alert(Hello World), msgBox(Hello World), alertBox[Hello World], Hello World"],
//         correctAnswer: "alert(Hello World)"
//     },
//     {
//         question:"During class, which phrase does our Glorious Leader, Stanley Lewis, use to indicate our understanding of the material",
//         options: ["prompt(Hello World), Fist to Five on that!, We're cooking with gas., It's Stanley Lewising Time!"],
//         correctAnswer: "Fist to Five on That!"
//     },
// ];

// let currentQuestionIndex = 0;
// let userAnswers = [];
// let countdownInterval;
// let timeRemaining = 30;

// function startQuiz() {
//     inputContainer.style.display = "none";
//     quizContainer.style.display = "block";
//     showQuestion(currentQuestionIndex);
//     startTimer();
// }

// function showQuestion(index) {
//     const questionContainer = document.querySelector("#questionContainer");
//     const questionElement = document.querySelector(".question");
//     const optionsContainer = document.createElement(".options");

//     // Get the current question object from the questions array
//     const currentQuestion = questions[index];

//     // Display the question text
//     questionElement.textContent = currentQuestion.question;

//     // Clear previous content in the question container
//     questionContainer.innerHTML = "";

//     // Create and display the options
//     currentQuestion.options.forEach((option, optionIndex) => {
//         const optionElement = document.createElement("div");
//         optionElement.classList.add("option");
//         optionElement.textContent = option;

//         // Add event listener to handle option selection
//         optionElement.addEventListener("click", () => handleOptionSelection(optionIndex));

//         // Append the option to the options container
//         optionsContainer.appendChild(optionElement);
//     });

//     // Append the options container to the question container
//     questionContainer.appendChild(optionsContainer);
// }


// function startTimer() {
//     countdownInterval = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
// // shows time
// timerElement.textContent = `Time Remaining: ${timeRemaining}s`;
// if (timeRemaining === 0) {
//     clearInterval(countdownInterval);
//     calculateScore();
// }
// timeRemaining--;
// }

// function submitAnswer() {
//     const selectedOptionIndex = document.querySelector(".option.selected")?.dataset.optionIndex;
  
//     if (selectedOptionIndex !== undefined) {
//       userAnswers[currentQuestionIndex] = parseInt(selectedOptionIndex);
//     }
  
//     // Move to the next question or calculate the score if it's the last question
//     if (currentQuestionIndex < questions.length - 1) {
//       currentQuestionIndex++;
//       showQuestion(currentQuestionIndex);
//     } else {
//       clearInterval(countdownInterval);
//       calculateScore();
//     }

//     function calculateScore() {
//         let score = 0;
//         for (let i = 0; i < questions.length; i++) {
//           if (userAnswers[i] === questions[i].correctAnswerIndex) {
//             score++;
//           }
//         }
      
//         const totalQuestions = questions.length;
//         const percentageScore = (score / totalQuestions) * 100;
      
//         resultElement.innerHTML = `<p>Your Score: ${score}/${totalQuestions} (${percentageScore.toFixed(2)}%)</p>`;
      
//         // Store the user's name and score in local storage or send it to the backend server
//         // You can use the userNameInput value for the user's name if you have an input field in your HTML
//       }
//     }

//     function handleOptionSelection(optionIndex) {
//         const options = document.querySelectorAll(".option");
//         options.forEach((option, index) => {
//           if (index === optionIndex) {
//             option.classList.add("selected");
//           } else {
//             option.classList.remove("selected");
//           }
//         });
//       }

// function showResult() {
//     // display user score and and store it in high score list
// }

// function displayHighScoreList() {
//     // display high score list
// }

// function viewHighScores() {
//     // Toggle the visibility of the high score list
//     const highScoreList = document.querySelector(".high-score-list");
//     highScoreList.style.display = highScoreList.style.display === "block" ? "none" : "block";
//   }


// startQuizBtn.addEventListener("click",startQuiz);
// submitBtn.addEventListener("click", submitAnswer);
// viewHighScoresLink.addEventListener("click",viewHighScores);

const quizContainer = document.querySelector(".quiz-container");
const startQuizBtn = document.querySelector("#startQuiz");
const submitBtn = document.querySelector("#submitBtn");
const resultElement = document.querySelector("#result");

const questions = [
  {
    question: "Inside which HTML element do we put Javascript?",
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a Javascript?",
    options: [
      "Both the <head> section and the <body> section",
      "The <body> section",
      "The <head> section",
    ],
    correctAnswer: "Both the <head> section and the <body> section",
  },
  {
    question: "An external JavaScript must contain the <script>",
    options: ["True", "False"],
    correctAnswer: "False",
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
    correctAnswer: 'alert("Hello World")',
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
    correctAnswer: "Fist to Five on That!",
  },
];

let currentQuestionIndex = 0;
let userAnswers = [];
let countdownInterval;
let timeRemaining = 30;

function startQuiz() {
  quizContainer.style.display = "block";
  showQuestion(currentQuestionIndex);
  startTimer();
}

function showQuestion(index) {
  const questionElement = document.querySelector(".question");
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options"); // Added a class to the options container

  // Clear previous content in the question container
  questionElement.textContent = "";

  // Get the current question object from the questions array
  const currentQuestion = questions[index];

  // Display the question text
  questionElement.textContent = currentQuestion.question;

  // Create and display the options
  currentQuestion.options.forEach((option, optionIndex) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionElement.dataset.optionIndex = optionIndex; // Store the option index as a data attribute

    // Add event listener to handle option selection
    optionElement.addEventListener("click", () => handleOptionSelection(optionIndex));

    // Append the option to the options container
    optionsContainer.appendChild(optionElement);
  });

  // Append the options container to the question container
  questionElement.appendChild(optionsContainer);
}

function startTimer() {
  countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timerElement.textContent = `Time Remaining: ${timeRemaining}s`;
  if (timeRemaining === 0) {
    clearInterval(countdownInterval);
    calculateScore();
  }
  timeRemaining--;
}

function submitAnswer() {
  const selectedOptionIndex = document.querySelector(".option.selected")?.dataset.optionIndex;

  if (selectedOptionIndex !== undefined) {
    userAnswers[currentQuestionIndex] = parseInt(selectedOptionIndex);
  }

  // Move to the next question or calculate the score if it's the last question
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    clearInterval(countdownInterval);
    calculateScore();
  }
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswerIndex) {
      score++;
    }
  }

  const totalQuestions = questions.length;
  const percentageScore = (score / totalQuestions) * 100;

  resultElement.innerHTML = `<p>Your Score: ${score}/${totalQuestions} (${percentageScore.toFixed(2)}%)`;

  // Store the user's name and score in local storage or send it to the backend server
  // You can use the userNameInput value for the user's name if you have an input field in your HTML
}

function handleOptionSelection(optionIndex) {
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    if (index === optionIndex) {
      option.classList.add("selected");
    } else {
      option.classList.remove("selected");
    }
  });
}

function showResult() {
  // display user score and store it in high score list
}

function displayHighScoreList() {
  // display high score list
}

function viewHighScores() {
  // Toggle the visibility of the high score list
  const highScoreList = document.querySelector(".high-score-list");
  highScoreList.style.display = highScoreList.style.display === "block" ? "none" : "block";
}

// Add the event listeners for the buttons
startQuizBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitAnswer);
viewHighScoresLink.addEventListener("click", viewHighScores);
