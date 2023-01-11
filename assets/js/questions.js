//- This variable lists all of my questions, Their answer choices and the actual answer--//
var questions = [
   {
      numb: 'What does "HTTP stand" for ?',
      options: ['Hyperion Transfer Text Practice', 'Hypno Text Turing Protoge', 'Hyper Text Transfer Protocol', 'How To Train Parrot'],
      answer: 'Hyper Text Transfer Protocol',

   },
   {
      numb: 'What Method Outputs a Message to the Web Console ?',
      options: ['show.message', 'text', 'console.log', 'display.string'],
      answer: 'console.log',

   },
   {
      numb: 'What Does "CSS" stand for ?',
      options: ['Computer Super Scientist', 'Completely Synchronized Swans', 'Cascading Style Sheets', 'Computer Stylist System'],
      answer: 'Cascading Style Sheets',

   },
   {
      numb: 'Who Owns JavaScript ?',
      options: ['Apple Corporation', 'Microsoft Corporation', 'Oracle Corporation', 'Folgers'],
      answer: 'Oracle Corporation',

   },
   {
      numb: 'What is this symbol, "($)", Specifically called in JQuery ?',
      options: ['Dollar Sign', 'Currency Indicator', 'Bling Operator', 'Pound Symbol'],
      answer: 'Bling Operator',

   },
   {
      numb: 'What Does "HTML" Stand For ?',
      options: ['Hyper Tension Machine Language', 'Hyper Text Markup Language', 'Hybrid Time Makeup Length', 'Hungry Tarantulas Make Lunch'],
      answer: 'Hyper Text Markup Language',

   },
];

//-- These are the variables that I will be referencing in this JavaScript File--//

var time = questions.length * 30;
var timerId;
var questionsEl = document.querySelector('#questions')
var timerEl = document.getElementById('time');
var questionOption = document.querySelector('#question-option')
var choices = document.querySelector('#choices')
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')
var startScreen = document.querySelector('#start-screen')
var startBtn = document.querySelector('#start')
var questionBtn = document.querySelectorAll('.options')
var index = 1

//-- This event listener starts the quiz when the user clicks on the "click here to start the quiz" Button --//
startBtn.addEventListener('click', function () {
   questionOption.textContent = questions[0].numb
   btn1.innerHTML = questions[0].options[0]
   btn2.innerHTML = questions[0].options[1]
   btn3.innerHTML = questions[0].options[2]
   btn4.innerHTML = questions[0].options[3]
   questionsEl.style = "display:block"
   startScreen.style = "display:none"

   timerId = setInterval(timeCounter, 1000);

   timerEl.textContent = time;

   for (let i = 0; i < questionBtn.length; i++) {
      questionBtn[i].addEventListener('click', nextQuestion)

   }
});

//-- This function will cause the quiz to progress to the next question, and will end the quiz and take the user to the High Score HTML Page --//

function nextQuestion(event) {
   checkAns(event.target.innerText)
   // console.log(index)
   // console.log(questions.length)
   if (index < questions.length) {
      console.log(index)
      questionOption.textContent = questions[index].numb
      btn1.innerHTML = questions[index].options[0]
      btn2.innerHTML = questions[index].options[1]
      btn3.innerHTML = questions[index].options[2]
      btn4.innerHTML = questions[index].options[3]
      index++
      console.log(index)
   }
    else {
     endQuiz ();
   }
   //index++
}


//-- This function starts the timer and enables it to countdown --//

function timeCounter() {
   time--;
   timerEl.textContent = time;

   if (time <= 0) {
      clearInterval(timerId);
      endQuiz ();
      
   }
};






//-- This function checks to see if the user chose the right/wrong answer, and deducts 10 seconds as a penalty for the wrong response --//

function checkAns (answer) {
   console.log (questions[index])
   if (!answer || !questions[index]) {
      return;
   }
   if (answer !== questions[index].answer) {
      time -= 10;

     
}}

function endQuiz () {
   localStorage.setItem('score',time)
   window.location = "./assets/Score.html";
}