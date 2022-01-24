var currentQuestionIndex = 0;
var timer = 75;
var totalPoints = 0
var timerSpan = document.querySelector("#timer");
var pointsSpan = document.querySelector("#score");


var questionArray = [
    {
        text: "What is 1 + 1?",
        correctAnswer: 2,
        choices: [
            2, 5, 9, 6
        ]
        // choice1: 2,
        // choice2: 5,
        // choice3: 9,
        // choice4: 6,
    }, {
        text: "What is 10 + 10",
        correctAnswer: 20,
        choices: [
            25, 50, 90, 20
        ],
        // choice1: 25,
        // choice2: 50,
        // choice3: 90,
        // choice4: 20,
    }, {
        text: "Third question",
        choices: [
            25, 50, 90, 20
        ],
        // choice1: 25,
        // choice2: 50,
        // choice3: 90,
        // choice4: 20,
        correctAnswer: 20
    }
]

console.log(questionArray)

function checkAnswer(event) {
    console.log(event.target.textContent);
    var selectedAnswer = event.target.textContent

    console.log(questionArray[currentQuestionIndex-1].correctAnswer)
    var correctAnswer = questionArray[currentQuestionIndex-1].correctAnswer

    if(selectedAnswer == correctAnswer) {
        alert("Correct!")
        totalPoints +=15;
        console.log(totalPoints);


    } else {
        alert("Wrong!")
        timer -=10;
    }

    
}


function start() {

    if(currentQuestionIndex < questionArray.length ) {
        // alert(questionArray[currentQuestionIndex].text)
        var textH2 = document.querySelector("#question-text");
        textH2.textContent = questionArray[currentQuestionIndex].text;

        for (let i = 0; i < 4; i++) {
            var choiceBtn = document.querySelector("#choice"+i+"-btn");
            choiceBtn.textContent = questionArray[currentQuestionIndex].choices[i];
            choiceBtn.addEventListener("click", checkAnswer)
        }

        currentQuestionIndex++;
    } else {
        alert("You finished the quiz! Your score is...")
    }   
}




var startBtn = document.querySelector(".startBtn")
startBtn.addEventListener("click", start);

// document.querySelector(".startBtn").addEventListener("click", start)


function timerFunction() {
setInterval(function() {
    timer--
    timerSpan.innerHTML = timer;
    console.log(timer);
},1000)
}
timerFunction();

