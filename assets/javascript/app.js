var triviaQuestions = [{
        question: "?",
        answers: ["", "", "", ""],
        answer: 
},{
        question: "?",
        answers: ["", "", "", "",],
        answer: 
},{
        question: "?",
        answers: ["", "", "", "",],
        answer:   
}];

$("#startButton").on("click", function(){
    $(this).hide();
    triviaGame();
});

function triviaGame(){
    $("#correctAnswers").empty();
    $("#wrongAnswers").empty();
    $("#unansweredQuestions").empty();
    correctAnswer = 0;
    wrongAnswer = 0;
    unansweredQuestions = 0;
    displayQuestion();
}

function displayQuestion(){

}