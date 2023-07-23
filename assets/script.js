// Javascript quiz

const quizConatiner = document.querySelector("#questionContainer");
const inputContainer= document.querySelector("#inputConatiner");
const userNameInput= document.querySelector("#userName");
const startQuizBtn= document.querySelector("#startquiz");
const timerElement= document.querySelector("#timer");
const submitBtn= document.querySelector("#submitBtn");
const resultElement= document.querySelector("#result");
const highScoreList= document.querySelector("#highScoreList");
const viewHighScoreLink= document.querySelector("#viewHighScore");

const questions = [
    {
        question:"",
        options: [""],
        correctAnswer: ""
    },
    {
        question:"",
        options: [""],
        correctAnswer: ""
    },
    {
        question:"",
        options: [""],
        correctAnswer: ""
    },
    {
        question:"",
        options: [""],
        correctAnswer: ""
    },
];

let currentQuestionIndex = 0;
let userAnswers = [];
let countdownInterval;
let timeRemaining = 30;

function startQuiz() {
    inputConatiner.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion(containerQuestionIndex);
    startTimer();
}

function showQuestion(index) {
    // displays question
}

function startTimer() {
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
// shows time
}

function submitAnswer() {
// store answers here
}

function calculateScore() {
    // calculate answers
    // display score in resultElement
    // store user name and score in local storage or send to backend server
}

function showResult() {
    // display user score and and store it in high score list
}

function displayHighScoreList() {
    // display high score list
}

function viewHighScores() {
    // show the high score list when the "View High Score" link is clicked
}

startQuizBtn.addEventListener("click",startQuiz);
submitBtn.addEventListener("click", submitAnswer);
viewHighScoresLink.addEventListener("click",viewHighScores);
