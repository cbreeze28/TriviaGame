var triviaQuestions = [{
        question: "what color is the grass?",
        answers: ["Blue", "Green", "Purple", "Red"],
        answer: 1
},{
        question: "How many inches in a foot?",
        answers: ["12", "11", "16", "10",],
        answer: 0
},{
        question: "How many days are in a week?",
        answers: ["5", "6", "7", "8",],
        answer:  2 
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
//pull questions from list
function displayQuestion(){
    $("correctAnswers").empty();
    answered = true;
    $("#questions").html("question" + (questions+1) + "/" + triviaQuestions.length);
    $(".question").html("<h3>" + triviaQuestions[questions].question + "</h3>");
    for (var i = 0; i < 4; i++){
        var choices = $("<div>");
        choices.text(triviaQuestions[questions].answers.length[i]);
        choices.attr({"data-index": i});
        choices.addClass("thisChoice");
        $(".answers").append(choices);
    }
//Timer countdown

}