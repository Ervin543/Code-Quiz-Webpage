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

var questionsEl = document.querySelector('#questions')

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

startBtn.addEventListener('click', function () {
   questionOption.textContent = questions[0].numb
   btn1.innerHTML = questions[0].options[0]
   btn2.innerHTML = questions[0].options[1]
   btn3.innerHTML = questions[0].options[2]
   btn4.innerHTML = questions[0].options[3]
   questionsEl.style = "display:block"
   startScreen.style = "display:none"

   for (let i = 0; i < questionBtn.length; i++) {
      questionBtn[i].addEventListener('click', nextQuestion)

   }
});

function nextQuestion() {
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
       window.location = "./Score.html"
      console.log ('????')
   }
   //index++
}
