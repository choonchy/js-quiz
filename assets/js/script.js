const startButton = document.getElementById('start-btn');
const answerButton = document.getElementById('answer-btn');
const questionContainer = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const aAnswer = document.getElementById("answer-a")
const bAnswer = document.getElementById("answer-b")
const cAnswer = document.getElementById("answer-c")
const scoreEl = document.getElementById("score")
const timerEl = document.getElementById("timer")
const endGameEl = document.getElementById("endgame")
const highScoreEl = document.getElementById("high-scores")
const playerScoreEl = document.getElementById("player-score")

var timer = 60;
var questionIndex = 0;
var score = 0;
var timerInterval;

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    quiz()
}

function countdown(num){
    timer = num;
    timerEl.textContent = "Time left: " + num
    timerInterval = setInterval(function() {
    timer--;
    timerEl.textContent = "Time left: " + timer;
    if (timer < 0) {
        clearInterval(timerInterval);
        endQuiz()
    } 
    }, 1000)
}


function quiz(){
    countdown(timer);
    scoreEl.textContent = "Score: " + score
    questionEl.textContent = questionsList[questionIndex].question
    aAnswer.textContent = questionsList[questionIndex].answers.a
    bAnswer.textContent = questionsList[questionIndex].answers.b
    cAnswer.textContent = questionsList[questionIndex].answers.c
}

function nextQuestion() {
    if(questionIndex < (questionsList.length - 1)) {
        questionIndex++
        clearInterval(timerInterval)
        quiz()
    } else if(questionIndex === 5) {
        endQuiz()
    }
}

function answerSelectedA() {
    if (questionsList[questionIndex].answers.a === questionsList[questionIndex].correctAnswer) {
        console.log('Correct!')
        score = score + 100 + (10 * timer)
        nextQuestion()
    } else {
        console.log('Incorrect')
        nextQuestion()
    }
}

function answerSelectedB() {
    if (questionsList[questionIndex].answers.b === questionsList[questionIndex].correctAnswer) {
        console.log('Correct!')
        score = score + 100 + (10 * timer)
        nextQuestion()
    } else {
        console.log('Incorrect')
        timer = timer - 5;
        nextQuestion()
    }
}

function answerSelectedC() {
    if (questionsList[questionIndex].answers.c === questionsList[questionIndex].correctAnswer) {
        console.log('Correct!')
        score = score + 100 + (10 * timer)
        nextQuestion()
    } else {
        console.log('Incorrect')
        nextQuestion()
    }
}

function endQuiz() {
    var playerName = prompt("Enter your initials!");
    questionContainer.classList.add('hide');
    playerScoreEl.textContent = "You finished! Your score is: " + score
    for (i = 0; i < highScores.length; i++) {
        if (score < highScores[i].score){
            
        } else {
            var highScore = document.createElement("li")
            highScoreEl.appendChild(highScore)
        }
    }
}

startButton.addEventListener('click', startQuiz)
aAnswer.addEventListener('click', answerSelectedA)
bAnswer.addEventListener('click', answerSelectedB)
cAnswer.addEventListener('click', answerSelectedC)

var questionsList = [
    {
        question: "What value is given to an empty variable?",
        answers: {
            a: "Null",
            b: "Empty",
            c: "Nil",
        },
        correctAnswer: "Null"
    },
    {
        question: "Which of these is not a JS library?",
        answers: {
            a: "p5.js",
            b: "React",
            c: "Python",
        },
        correctAnswer: "Python"
    },
    {
        question: "What does 'var' stand for in JavaScript?",
        answers: {
            a: "Variation",
            b: "Variable",
            c: "Variety",
        },
        correctAnswer: "Variable"
    },
    {
        question: "What year did JavaScript first appear?",
        answers: {
            a: "1995",
            b: "2001",
            c: "1997",
        },
        correctAnswer: "1995"
    },
    {
        question: "What character is used to 'escape' special characters (such as quotation marks)?",
        answers: {
            a: "Backslash",
            b: "Forwardslash",
            c: "Ampersand",
        },
        correctAnswer: "Backslash"
    },
    {
        question: "What does the 'pop' array method do?",
        answers: {
            a: "Inserts a new item into the array",
            b: "Adds a new element to the array and returns the array's length",
            c: "Removes the last element in the array and returns its value",
        },
        correctAnswer: "Removes the last element in the array and returns its value"
    },
]

var highScores = [
    {
        name: "TC",
        score: 0
    },
    {
        name: "TC",
        score: 0
    },
    {
        name: "TC",
        score: 0
    },
    {
        name: "TC",
        score: 0
    },
    {
        name: "TC",
        score: 0
    },
]