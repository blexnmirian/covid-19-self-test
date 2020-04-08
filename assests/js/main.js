
const correctAnswerSpan = document.querySelector('.correct-answers');
const totalQuestionSpan2 = document.querySelector('.total-question2')
const percentage = document.querySelector('.percentage')
let options = document.querySelector('.options').children;
const question = document.querySelector('.question')
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector('.total-question');
let myArr = [];
let myArray = [];
let questionIndex;
let index = 0;
let score = 0;

// Questions and options and answers

const questions = [
  {
    q: 'Do you have cough?',
    options:['Yes', 'No'],
    answer:0
  },

  {
    q: 'Do you have cold?',
    options:['Yes', 'No'],
    answer:0
  },

  {
    q: 'Are you having diarrhea?',
    options:['Yes', 'No'],
    answer:0
  },

  {
    q: 'Are you having sorethroat?',
    options:['Yes', 'No'],
    answer:0
  },

  {
    q: 'Are you having body aches?',
    options:['Yes', 'No'],
    answer:0
  },

  {
    q: 'Are you experiencing headaches?',
    options:['Yes', 'No'],
    answer:0
  },
  {
    q: 'Do you find it difficult to breath?',
    options:['Yes', 'No'],
    answer:0
  },
  {
    q: 'Are you experiencing fatique?',
    options:['Yes', 'No'],
    answer:0
  },
  {
    q: 'Have you been out of the country for the past one month?',
    options:['Yes', 'No'],
    answer:0
  },

  {
    q: 'Do you a direct contact with a positive covid-19 patient?',
    options:['Yes', 'No'],
    answer:0
  },
]

//set question and options and question number

totalQuestionSpan.innerHTML = questions.length;

function load(){
  questionNumberSpan.innerHTML = index + 1;
  question.innerHTML = questions[questionIndex].q;
  op1.innerHTML = questions[questionIndex].options[0];
  op2.innerHTML = questions[questionIndex].options[1];
  index++;
}

function check(element){
 if(element.id == questions[questionIndex].answer){
  element.classList.add('danger')
  score++;
  console.log('score:' + score);
 }else{
  element.classList.add('normal')
 }
 disabledOptions()
}

function disabledOptions(){
  for(let i = 0; i < options.length; i++){
    options[i].classList.add("disabled");
  }
}

function enableOptions(){
  for(let i = 0; i < options.length; i++){
    options[i].classList.remove('disabled', 'danger', 'normal')
  }
}

function validate(){
  if(!options[0].classList.contains('disabled')){
    alert('Please select one option')
  }else{
    enableOptions();
    randomQuestion();
 
  }
}

function next(){
  validate()
}

function randomQuestion(){
  let randomNumber = Math.floor(Math.random() * questions.length );
  let hitDuplicate = 0;
  

if(index == questions.length){
  quizOver();
}else{
  if(myArray.length > 0){
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] == randomNumber){
          hitDuplicate = 1;
          break;
          
        }
    }
    if(hitDuplicate == 1){
      randomQuestion();
    }else{
      questionIndex = randomNumber;
      load();
    }
  }

  if(myArray.length == 0){
    questionIndex = randomNumber;
    load();
    myArr.push(questionIndex);
  }
  myArray.push(randomNumber)
 
 }
}
window.onload = function(){
  randomQuestion()
}


