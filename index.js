var readlineSync=require ("readline-sync");
var score=0;
var userName= readlineSync.question("Enter your name?")
console.log("Welcome " +userName+ "! Lets see how well you know me.");

function play(question,answer){
var userAnswer= readlineSync.question(question);

if(userAnswer=== answer){
  console.log("Right!");
  score=score+1;
}else{
  console.log("Wrong!");
}
  console.log("current score is:",score);
  console.log("---------");
}

var questions=[{
  question:"where do I live?",
  answer:"Hyderabad"
},
{
  question:"Which flavour of ice cream do I like?",
  answer:"Chocolate"
    },
  {
  question:"What do I prefer Coffee or Tea?",
  answer:"Coffee"
    }]

for (var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play (currentQuestion.question,currentQuestion.answer)
}
console.log("YAY! You scored:",score)

