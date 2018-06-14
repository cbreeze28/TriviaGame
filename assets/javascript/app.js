var triviaQuestions = [{
        question: "what color is the grass?",
        answers: ["Blue", "Green", "Purple", "Red"],
        answer: 
},{
        question: "How many inches in a foot?",
        answers: ["12", "11", "16", "10",],
        answer: 
},{
        question: "How many days are in a week?",
        answers: ["5", "6", "7", "8",],
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