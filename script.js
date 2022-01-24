var currentQuestionIndex = 0;
var timer = 75;
var totalPoints = 0
var timerSpan = document.querySelector("#timer");
var pointsSpan = document.querySelector("#score");


var questionArray = [
    {
        text: "What is used to encase an array?",
        correctAnswer: "brackets",
        choices: [
            "quotes", "braces", "parentheses", "brackets"
        ]
        // choice1: 2,
        // choice2: 5,
        // choice3: 9,
        // choice4: 6,
    }, {
        text: "What is often paired with an if statement?",
        correctAnswer: "Else",
        choices: [
            "Else", "indeed", "Random", "India"
        ],
        // choice1: 25,
        // choice2: 50,
        // choice3: 90,
        // choice4: 20,
    }, {
        text: "What is used to input data on a webpage",
        correctAnswer: "Window prompt",
        choices: [
            "Console.log", "Window alert", "Fat fingers", "Window prompt"
        ],
        // choice1: 25,
        // choice2: 50,
        // choice3: 90,
        // choice4: 20,
        
    }, {
        text: "What is used to target classes and id's on a webpage?",
        correctAnswer: "document.querySelector",
        choices: [
            "Console.log", "Window alert", " document.querySelector", "Window prompt"
        ],
        
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

        timerFunction();

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





var nextBtn = document.querySelector(".nextBtn")
nextBtn.addEventListener("click", next);



function next() {

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