var playerScore = 0;

var timerLength = 600;

var countdown = function(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
};

countdown(timerLength);


var questions = [
    {
        question: "What value is given to an empty variable?",
        answers: {
            a: "Null",
            b: "Empty",
            c: "Nil",
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these is not a JS library?",
        answers: {
            a: "p5.js",
            b: "React",
            c: "Python",
        },
        correctAnswer: "c"
    },
    {
        question: "What does 'var' stand for in JavaScript?",
        answers: {
            a: "Variation",
            b: "Variable",
            c: "Variety",
        },
        correctAnswer: "b"
    },
    {
        question: "What year did JavaScript first appear?",
        answers: {
            a: "1995",
            b: "2001",
            c: "1997",
        },
        correctAnswer: "a"
    },
    {
        question: "What character is used to 'escape' special characters (such as quotation marks)?",
        answers: {
            a: "Backslash",
            b: "Forwardslash",
            c: "Ampersand",
        },
        correctAnswer: "a"
    },
    {
        question: "What does the 'pop' array method do?",
        answers: {
            a: "Inserts a new item into the array",
            b: "Adds a new element to the array and returns the array's length",
            c: "Removes the last element in the array and returns its value",
        },
        correctAnswer: "c"
    },
]
