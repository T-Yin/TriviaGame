$(document).ready(function () {

    var qna = {
        one: {
            question: "What was Disney's first animated film?",
            answer: "Snow White and the Seven Dwarfs",
            incorrect: ["Cinderella", "Sleeping Beauty", "Lion King"],
        },
        two: {
            question: "When was The Little Mermaid released?",
            answer: "1989",
            incorrect: ["1942", "1950", "1973"],
        },
        three: {
            question: "Which of these films was more recently released?",
            answer: "Tangled",
            incorrect: ["The Princess and the Frog", "Tarzan", "Mulan"],
        },
        four: {
            question: "Who is the villian in the film Sleeping Beauty?",
            answer: "Maleficent",
            incorrect: ["Ursula", "Scar", "Cruella de Vil"],
        },
        five: {
            question: "What is the name of the snowman in the film Frozen?",
            answer: "Olaf",
            incorrect: ["Bambi", "Sven", "Heihei"],
        }
    }

    var correctScore = 0;
    var incorrectScore = 0;
    var unansweredScore = 0;

    var isAnswerCorrect = false;

    var isFirstQ = false;
    var isSecondQ = false;
    var isThirdQ = false;
    var isFourthQ = false;
    var isFifthQ = false;

    var choice1 = false;
    var choice2 = false;
    var choice3 = false;
    var choice4 = false;

    var timer = 0;

    // Function to hide questions, button, and timer.
    function hideQuestions() {
        $("#question").hide();
        $("#answers").hide();
        $("#timer").hide();
    }

    // Function to show question, buttons, and timer.
    function showQuestions() {
        $("#question").show();
        $("#answers").show();
        $("#timer").show();
    }

    var intervalId;

    function runTimer() {
        timer = 15;
        $("#timer").show();
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#timer").html(timer + " seconds left");

        if (timer === 0) {
            stopTimer()
            $("#timer").hide();

            if (isFirstQ) {
                unansweredScore++;
                secondQ();
            }
            else if (isSecondQ) {
                unansweredScore++;
                thirdQ();
            }
            else if (isThirdQ) {
                unansweredScore++;
                fourthQ();
            }
            else if (isFourthQ) {
                unansweredScore++;
                fifthQ();
            }
            else if (isFifthQ) {
                unansweredScore++;
                noMoreQ();
            }

        }
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    var $results = document.getElementById("results");
    var $scoreWin = document.getElementById("scoreWin");
    var $scoreLose = document.getElementById("scoreLose");
    var $scoreUnanswered = document.getElementById("scoreUnanswered");

    function showResult() {
        if (isAnswerCorrect) {
            $("#resultsSection").show();
            $results.textContent = "Correct!"
            $scoreWin.textContent = "Correct Answers: " + correctScore;
            $scoreLose.textContent = "Incorrect Answers: " + incorrectScore;
            $scoreUnanswered.textContent = "Unanswered: " + unansweredScore;

            choice1 = false;
            choice2 = false;
            choice3 = false;
            choice4 = false;
            isAnswerCorrect = false

            isFirstQ = false;
            isSecondQ = false;
            isThirdQ = false;
            isFourthQ = false;
            isFifthQ = false;

            setTimeout(function () { $("#resultsSection").hide() }, 5000);

        } else {
            $("#resultsSection").show();
            $results.textContent = "Incorrect."
            $scoreWin.textContent = "Correct Answers: " + correctScore;
            $scoreLose.textContent = "Incorrect Answers: " + incorrectScore;
            $scoreUnanswered.textContent = "Unanswered: " + unansweredScore;

            choice1 = false;
            choice2 = false;
            choice3 = false;
            choice4 = false;

            isAnswerCorrect = false

            isFirstQ = false;
            isSecondQ = false;
            isThirdQ = false;
            isFourthQ = false;
            isFifthQ = false;

            setTimeout(function () { $("#resultsSection").hide() }, 5000);

        }
    }

    function showFinalResult() {
        $("#resultsSection").show();
        $results.textContent = "Final Score"
        $scoreWin.textContent = "Correct Answers: " + correctScore;
        $scoreLose.textContent = "Incorrect Answers: " + incorrectScore;
        $scoreUnanswered.textContent = "Unanswered: " + unansweredScore;

    }

    var $question = document.getElementById("question");
    var $choice1 = document.getElementById("choice1");
    var $choice2 = document.getElementById("choice2");
    var $choice3 = document.getElementById("choice3");
    var $choice4 = document.getElementById("choice4");

    // Function to start the trivia questions.
    function trivia(question, choice1, choice2, choice3, choice4) {
       
        runTimer();
        showQuestions();

        $question.textContent = question;
        $choice1.innerText = choice1;
        $choice2.innerText = choice2;
        $choice3.innerText = choice3;
        $choice4.innerText = choice4;
       
    }

    // Functions that run once the page loads.
    hideQuestions();

    // Start button function
    $("#startBtn").on("click", function (event) {

        $("#startBtn").hide();
        $("#instructions").hide();
        isFirstQ = true;
        trivia(qna.one.question, qna.one.incorrect[0], qna.one.answer, qna.one.incorrect[1], qna.one.incorrect[2]);

    });

    $("#choice1").on("click", function (event) {
        choice1 = true;
    });

    $("#choice2").on("click", function (event) {
        choice2 = true;
    });

    $("#choice3").on("click", function (event) {
        choice3 = true;
    });

    $("#choice4").on("click", function (event) {
        choice4 = true;
    });


    $(".button").on("click", function (event) {
        stopTimer();

        if (isFifthQ && choice4) {
            isAnswerCorrect = true;
            correctScore++;
            hideQuestions();
            showResult();
            showFinalResult();

        } else if (isFifthQ) {
            incorrectScore++;
            noMoreQ();
        };

        if (isFourthQ && choice1) {
            isAnswerCorrect = true;
            correctScore++;
            hideQuestions();
            showResult();
            setTimeout(function () { trivia(qna.five.question, qna.five.incorrect[2], qna.five.incorrect[0], qna.five.incorrect[1], qna.five.answer) }, 5000);
            isFifthQ = true;

        } else if (isFourthQ) {
            incorrectScore++;
            fifthQ();
        };

        if (isThirdQ && choice1) {
            isAnswerCorrect = true;
            correctScore++;
            hideQuestions();
            showResult();
            setTimeout(function () { trivia(qna.four.question, qna.four.answer, qna.four.incorrect[0], qna.four.incorrect[1], qna.four.incorrect[2]) }, 5000);
            isFourthQ = true;

        } else if (isThirdQ) {
            incorrectScore++;
            fourthQ();
        };

        if (isSecondQ && choice3) {
            isAnswerCorrect = true;
            correctScore++;
            hideQuestions();
            showResult();
            setTimeout(function () { trivia(qna.three.question, qna.three.answer, qna.three.incorrect[0], qna.three.incorrect[1], qna.three.incorrect[2]) }, 5000);
            isThirdQ = true;

        } else if (isSecondQ) {
            incorrectScore++;
            thirdQ();
        };

        if (isFirstQ && choice2) {
            isAnswerCorrect = true;
            correctScore++;
            hideQuestions();
            showResult();
            setTimeout(function () { trivia(qna.two.question, qna.two.incorrect[1], qna.two.incorrect[0], qna.two.answer, qna.two.incorrect[2]) }, 5000);
            isSecondQ = true;

        } else if (isFirstQ) {
            incorrectScore++;
            secondQ();
        };

    })

    function secondQ() {
        stopTimer();
        isAnswerCorrect = false;
        hideQuestions();
        showResult();
        setTimeout(function () { trivia(qna.two.question, qna.two.incorrect[1], qna.two.incorrect[0], qna.two.answer, qna.two.incorrect[2]) }, 5000);
        isSecondQ = true;
    }

    function thirdQ() {
        stopTimer();
        isAnswerCorrect = false;
        hideQuestions();
        showResult();
        setTimeout(function () { trivia(qna.three.question, qna.three.answer, qna.three.incorrect[0], qna.three.incorrect[1], qna.three.incorrect[2]) }, 5000);
        isThirdQ = true;
    }


    function fourthQ() {
        stopTimer();
        isAnswerCorrect = false;
        hideQuestions();
        showResult();
        setTimeout(function () { trivia(qna.four.question, qna.four.answer, qna.four.incorrect[0], qna.four.incorrect[1], qna.four.incorrect[2]) }, 5000);
        isFourthQ = true;
    }

    function fifthQ() {
        stopTimer();
        isAnswerCorrect = false;
        hideQuestions();
        showResult();
        setTimeout(function () { trivia(qna.five.question, qna.five.incorrect[2], qna.five.incorrect[0], qna.five.incorrect[1], qna.five.answer) }, 5000);
        isFifthQ = true;
    }

    function noMoreQ() {
        stopTimer();
        isAnswerCorrect = false;
        hideQuestions();
        showResult();
        showFinalResult();
    }

});
