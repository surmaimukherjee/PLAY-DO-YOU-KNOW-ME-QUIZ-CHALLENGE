var readlineSync= require("readline-sync");
var userName = readlineSync.question("PLease Enter your name: ");
console.log("Welcome " + userName + " to DO YOU KNOW ME QUIZ CHALLENGE");
console.log(" NOTE : Type only option. Ex: a");

var score = 0

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer)
  {
    console.log("right!")
    score = score +1;
  }
  else
  {
    console.log("wrong!")
    score = score -1
  }
  console.log("Current SCore: ", score)
  console.log("_______")
}

var questions = [{question: "Where do I live ? a. Pune  b. Nagpur  c. Mumbai ", answer: "b"}, {question: "Where do I Study ? a. Nagpur b. Bangalore  c. Hyderabad ", answer: "a"}, {question: "Did I pursue my SSC and graduation course from same city? a. YES  b. NO ", answer: "b"}, {question: "What's my age ? a. above 15 yrs  b. above 25 yrs  c. above 20 yrs ", answer: "c"},{question: "What's my hobby ? a. Singing  b. Sketching  c. Dancing ", answer: "c"}];

for(var i = 0; i<questions.length;i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You scored: ", score);