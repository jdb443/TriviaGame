// Jonathan Behar Homework 5 Trivia Game

$(document).ready(function () {

    var triviaQuestions = [{
        // Question 1
        question: "In what year was George R. R. Martin born?",
        answerList: ["1929", "1946", "1948", "1955"],
        answer: 2
    }, {
        // Question 2
        question: "What Network is Game of Thrones aired on?",
        answerList: ["Netflix", "Hulu", "Starz", "HBO"],
        answer: 3
    }, {
        // Question 3
        question: "Which one is not a Westeros House name in Game of Thrones?",
        answerList: ["Umber", "Blackfyre", "Hightower", "Peverell"],
        answer: 3
    }, {
        // Question 4
        question: "Who is the first character to die on Game of Thrones TV show?",
        answerList: ["Eddard Stark", "Waymar Royce", "Robert Baratheon", "Will"],
        answer: 1
    }, {
        // Question 5
        question: "Who was pushed out a window?",
        answerList: ["Brandon Stark", "Balon Greyjoy", "Tommen Baratheon", "Lysa Arryn"],
        answer: 0
    }, {
        // Question 6
        question: "Catelyn Stark resented which family member?",
        answerList: ["Robb Stark", "Brandon Stark", "Jon Snow", "Arya Stark"],
        answer: 2
    }, {
        // Question 7
        question: "Why did Robert Baratheon go to Winterfell?",
        answerList: ["A battle was raging in Kings landing", "He thought it would be cool to freeze in the North", "He wanted to go on vacation", "The hand died and wanted a replacement"],
        answer: 3
    }, {
        // Question 8
        question: "Which is not a Game of Thrones book?",
        answerList: ["A Storm Of Swords", "A Feast for Crows", "Clash of Clans", "A Dance With Dragons"],
        answer: 2
    }, {
        // Question 9
        question: "Who who was not an extra in Game of Thrones?",
        answerList: ["Will Champion", "Ed Sheeran", "Steve Buscemi", "Aaron Rodgers"],
        answer: 2
    }, {
        // Question 10
        question: "What is not a name of a sword in Game of Thrones?",
        answerList: ["Needle", "Stormbreaker", "Oathkeeper", "Ice"],
        answer: 1
    }, {
        // Question 11
        question: "Before leaving the Wall what does Tyrion Lannister do?",
        answerList: ["Push a crow off the top", "Spot a White Walker", "Piss off the wall", "Have sex"],
        answer: 2
    }, {
        // Question 12
        question: "What two actors plays the Night King?",
        answerList: ["Tom Cavanagh and Richard Brake", "Richard Brake and Vladimir Furdik", "Isaac Hempstead-Wright and Vladimir Furdik", "Hafþór Júlíus Björnsson and Nikolaj Coster-Waldau"],
        answer: 1
    }, {
        // Question 13
        question: "What is the words of House Karstark?",
        answerList: ["Winter is Coming", "Hear Me Roar", "The Sun of Winter", "Protect the Wolf"],
        answer: 1
    }, {
        // Question 14
        question: "'Who is made Leader at Kings Landing at the End of Game of Thrones?",
        answerList: ["Brandon Stark", "Hodor", "Yara Greyjoy", "Aegon Targaryen"],
        answer: 0
    }, {
        // Question 15
        question: "At the End of Game of Thrones what is Sansa doing?",
        answerList: ["Morning over Joffery", "Visiting the wall", "Being declared Queen in the North", "Sitting in the small council with Bran"],
        answer: 2
    }, {
        // Question 16
        question: "Who does Brandon Stark chase for hitting a bullseye?",
        answerList: ["Sansa Stark", "Arya Stark", "Hodor", "Theon Greyjoy"],
        answer: 1
    }, {
        // Question 17
        question: "Who kills the Night King?",
        answerList: ["Sansa Stark", "Aegon Targaryen", "Arya Stark", "Daenerys Targaryen"],
        answer: 2
    }, {
        // Question 18
        question: "During the Battle of the Bastards what House rides in to save the Stark's?",
        answerList: ["House Greyjoy", "House Frey", "House Targaryen", "House Arryn"],
        answer: 3
    }, {
        // Question 19
        question: "What does Walder Frey do before he dies?",
        answerList: ["Eat his sons", "Beg for his life", "Scream burn them all", "Shit himself"],
        answer: 0
    }, {
        // Question 20
        question: "How does Lyanna Mormont die?",
        answerList: ["Jorah Mormont stabs her", "She gets poisoned", "She gets crushed by a giant before killing it", "Trial by combat"],
        answer: 2
    }, {
        // Question 21
        question: "Jaqen H'qhar offers how many kills to square his debt?",
        answerList: ["1", "2", "3", "5"],
        answer: 2
    }, {
        // Question 22
        question: "Who is the second person Jaqen H'qhar kills to square his debt?",
        answerList: ["Ser Amory Lorch", "Tywin Lannister", "Cersei Lannister", "Joffrey Baratheon"],
        answer: 0
    }, {
        // Question 23
        question: "According to thewrap.com how many unofficial kills does Ayra Stark have?",
        answerList: ["24", "50", "200", "100,000+"],
        answer: 3
    }, {
        // Question 24
        question: "How many people was Margaery Tyrell married to?",
        answerList: ["1", "2", "3", "4"],
        answer: 2
    }, {
        // Question 25
        question: "Who did the Valyrian steel dagger actually belong to?",
        answerList: ["Lord Petyr Baelish", "Theon Greyjoy", "Ned Stark", "Jaqen H'qhar"],
        answer: 0
    }];

    var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15', 'question16', 'question17', 'question18', 'question19', 'question20', 'question21', 'question22', 'question23', 'question24', 'question25'];
    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userSelect;
    var messages = {
        correct: "ME ACHRAE ATHNAJAHAROON! SMELLS LIKE VICTORY!",
        incorrect: "YER OJILA! ",
        endTime: "VO ALIKH KI KASHI! Out of time!",
        finished: "Vezhven! Kirekosi chek anha hash? Great! How well I do?"
    }

    var allAudio = {
        volume: true,
        hit: new Audio("assets/audio/R2D2_sounds.mp3"),
        music: new Audio("assets/audio/SW_Imperial_March.mp3")
    };
    allAudio.music.loop = true;

    $("#volumeButton").on("click", function () {
        if (allAudio.volume) {
            $("#volumeButton").attr("class", "fa fa-volume-down threeDV");
            allAudio.hit.muted = true;
            allAudio.music.muted = true;
        } else {
            $("#volumeButton").attr("class", "fa fa-volume-up threeDV");
            allAudio.hit.muted = false;
            allAudio.music.muted = false;
        }
        allAudio.volume = !allAudio.volume;
    });

    $('#startBtn').on('click', function () {
        $(this).hide();
        newGame();
    });

    $('#startOverBtn').on('click', function () {
        $(this).hide();
        newGame();
    });

    function newGame() {
        $('#finalMessage').empty();
        // $('#finalMessage').hide();
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unanswered').empty();
        $('#currentQuestion').empty();
        $('#currentQuestion').hide();
        $('.thisChoice').empty(); // Clears question page
        $('.thisChoice').hide();
        $('.question').empty();
        $('.question').hide();
        $('.answerList').empty();
        $('.answerList').hide();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    function newQuestion() {
        $('#message').empty();
        $('#currentQuestion').show();
        $('.thisChoice').show();
        $('.question').show();
        $('.answerList').show();
        $('#correctedAnswer').empty();
        $('#gif').empty();
        answered = true;

        // Sets up new questions and answerList
        $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + triviaQuestions.length);
        $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
        for (var i = 0; i < 4; i++) {
            var choices = $('<div>');
            choices.text(triviaQuestions[currentQuestion].answerList[i]);
            choices.attr({
                'data-index': i
            });
            choices.addClass('thisChoice');
            $('.answerList').append(choices);
        }
        countdown();
        // Clicking an answer will pause the time and setup answer Page
        $('.thisChoice').on('click', function () {
            userSelect = $(this).data('index');
            clearInterval(time);
            answerPage();
            // $('.answerList').empty();
        });
    }

    function countdown() {
        seconds = 15;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        // Sets timer to go down
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    function answerPage() {
        $('#currentQuestion').empty();
        $('#currentQuestion').hide();
        $('.thisChoice').empty(); // Clears question page
        $('.thisChoice').hide();
        $('.question').empty();
        $('.question').hide();
        $('.answerList').empty();
        $('.answerList').hide();

        var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
        $('#gif').html('<img src = "assets/images/gif/' + gifArray[currentQuestion] + '.gif" width = "400px">');
        // Checks to see correct, incorrect, or unanswered
        if ((userSelect == rightAnswerIndex) && (answered == true)) {
            correctAnswer++;
            $('#message').html(messages.correct);
        } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 5000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 5000);
        }
    }

    function scoreboard() {
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        $('#gif').empty();

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#startOverBtn').addClass('reset');
        $('#startOverBtn').show();
        $('#startOverBtn').html('Start Over?');
    }

})