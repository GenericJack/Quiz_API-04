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
        question:"Inside which HTML element do we put Javascript?",
        options: ["<javascript, <js>, <script>, <scripting>"],
        correctAnswer: "<script>"
    },
    {
        question:"Where is the correct place to insert a Javascript?",
        options: ["Both the <head> section and the <body> section, The <body> section, The <head> section"],
        correctAnswer: "Both the <head> section and the <body> section"
    },
    {
        question:"An external JavaScript must contain the <script>",
        options: ["True, False"],
        correctAnswer: "False"
    },
    {
        question:"How do you write Hello World in an alert box? Assume double quotations are already placed around Hello World.",
        options: ["alert(Hello World), msgBox(Hello World), alertBox[Hello World], Hello World"],
        correctAnswer: "alert(Hello World)"
    },
    {
        question:"During class, which phrase does our Glorious Leader, Stanley Lewis, use to indicate our understanding of the material",
        options: ["prompt(Hello World), Fist to Five on that!, We're cooking with gas., It's Stanley Lewising Time!"],
        correctAnswer: "Fist to Five on That!"
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
