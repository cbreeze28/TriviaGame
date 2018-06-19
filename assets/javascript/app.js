var quizSection = $('#triviaQuestions');
var timerStartValue = 10;

//Buttons-on-click-function
$(document).on('click', '#resetButton', function(refresh) {
  triviaGame.reset();
});

$(document).on('click', '.answer-button', function(refresh) {
  triviaGame.clicked(refresh);
});

$(document).on('click', '#startButton', function(refresh) {
  $('#timeElement').prepend('<h1>Time Remaining: <span id="stopWatch">10</span> Seconds!</h1>');
  $("#instructionsTrivia").hide();
  triviaGame.loadQuestion();
});

//questions
var questions = [{
  question: 'The ore bauzite is the chief commercial source of which element?',
  answers: ["Aluminum", "Steel", "Bronze", "Iron"],
  correctAnswer: 'Aluminum',
}, {
    question: 'What element are diamonds made of?',
    answers: ["Phosphorus", "Carbon", "Hydrogen", "Helium"],
    correctAnswer: 'Carbon',
}, {
    question: 'What was the first man-made satellite put into orbit?',
    answers: ["Kalpana-1", "Molniya", "Explorer 1", "Sputnik 1"],
    correctAnswer: 'Sputnik 1',
}, {
    question: 'What animal has the highest blood pressure?',
    answers: ["Elephant", "Giraffe", "Sperm Whale", "Hummingbird"],
    correctAnswer: 'Giraffe',
},{
    question: 'How many hairs does the average human lose each day?',
    answers: ["10-40", "40-100", "100-150", "150-200"],
    correctAnswer: '40-100',
},{
    question: 'What is a group of owls called?',
    answers: ["Parliament", "Gang", "Flock", "Faction"],
    correctAnswer: 'Parliament',
},{
    question: 'What is the atomic number of the element Uranium?',
    answers: ["ninety-two", "eighty-four", "ninety-eight", "ninety-four"],
    correctAnswer: 'ninety-two',
}, {
    question: 'Which planet was originally known as the Georgian Star?',
    answers: ["Saturn", "Pluto", "Mars", "Uranus"],
    correctAnswer: 'Uranus',
}];



var triviaGame = {
  questions:questions,
  currentQuestion: 0,
  counter: timerStartValue,
  correct: 0,
  incorrect: 0,
  countdown: function(){
    triviaGame.counter--;
    $('#stopWatch').html(triviaGame.counter);

    if (triviaGame.counter === 0){
      console.log('YOUR TIME IS UP!');
      triviaGame.timeUp(), alert('YOUR TIME IS UP!');
    }
  },
  loadQuestion: function(){
    timer = setInterval(triviaGame.countdown, 1000);
    quizSection.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
      quizSection.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    triviaGame.counter = timerStartValue;
    $('#stopWatch').html(triviaGame.counter);
    triviaGame.currentQuestion++;
    triviaGame.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#stopWatch').html(triviaGame.counter);

    quizSection.html('<h2>You have run out of time!</h2>');
    quizSection.append('<h3>The answer you should have chosen was: ' + questions[this.currentQuestion].correctAnswer);
    triviaGame.nextQuestion();
//above is where next question pulled if time runs out

    if (triviaGame.currentQuestion === questions.length - 1){
      setTimeout(triviaGame.results, 3 * 1000);
    } else {
      setTimeout(triviaGame.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    quizSection.html('<h2>Trivia Questions Completed, Results:</h2>');
    $('#stop-watch').html(triviaGame.counter);
    quizSection.append('<h3>Correct Answers: ' + triviaGame.correct + '</h3>');
    quizSection.append('<h3>Incorrect Answers: ' + triviaGame.incorrect + '</h3>');
    quizSection.append('<h3>Unanswered: ' + (questions.length - (triviaGame.incorrect + triviaGame.correct)) + '</h3>');
  },
  clicked: function(refresh) {
    clearInterval(timer);

    if ($(refresh.target).data('name') === questions[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    triviaGame.incorrect++;
    clearInterval(timer);
    quizSection.html('<h2>Nope!</h2>');
    quizSection.append('<h3>The Correct Answer was: ' + questions[triviaGame.currentQuestion].correctAnswer + '</h3>');

    if (triviaGame.currentQuestion === questions.length - 1){
      setTimeout(triviaGame.results, 3 * 1000);
    } else {
      setTimeout(triviaGame.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    triviaGame.correct++;
    quizSection.html('<h2>Correct!</h2>');

    if (triviaGame.currentQuestion === questions.length - 1){
      setTimeout(triviaGame.results, 3 * 1000);
    } else {
      setTimeout(triviaGame.nextQuestion, 3 * 1000);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = timerStartValue;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};