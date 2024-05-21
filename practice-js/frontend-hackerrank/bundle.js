let preQuiz = document.getElementById('preQuizInstructions');
let loader = document.getElementById('loaderContainer');
let quiz = document.getElementById('quiz');
let startButton = document.getElementById('startButton');
let submitButton = document.getElementById('submitButton');
let restartButton = document.getElementById('restartButton');
let questionCounter = 0;

// preQuiz.hidden = true;
// startButton.hidden = true;
loader.hidden = true;
quiz.hidden = true;

let buffer = () => {
    preQuiz.hidden = true;
    startButton.hidden = true;
    loader.hidden = false;
    setTimeout(function(){
        loader.hidden = true;
        quiz.hidden = false;
    },100)
}
startButton.addEventListener('click',buffer);