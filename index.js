var readlineSync = require("readline-sync");
console.log("Lets start the Quiz!");
console.log();
var userName = readlineSync.question("What is your name? ");
console.log();
console.log("Welcome " + userName + " to do you know me QUIZ? ");
console.log("Choose the right option.");
console.log();
score = 0;

var highscore = [{ name: "Ajju", score: 10 }];


function quiz(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right! ");
    score = score + 4;
  } else {
    console.log("Wrong! ");
    score--;
  }
  console.log("Your score is: ", score);
  console.log("---------------------------------------------\n");
}

var questions = [{ question: "What is my title?\n a:Bhaskar\n b:Kumar\n c:Singh\n", answer: "a" },
{ question: "What is my age?\n a:20\n b:21\n c:22\n", answer: "a" },
{ question: "Who is my favorite MCU character?\n a:Thor\n b:Ironman\n c:Spiderman\n", answer: "b" },
{ question: "What is my favorite color?\n a:Red\n b:Blue\n c:Black\n", answer: "b" },
{ question: "Where is my hometown?\n a:Odisha\n b:Delhi\n c:Bihar\n", answer: "c" }]


for (var i = 0; i < questions.length; i++) {
    currentQ = questions[i];
    quiz(currentQ.question, currentQ.answer);
  }
  
  console.log("Yay your final score is: ", score);
  console.log("High score: ");
  
  for (var i = 0; i < highscore.length; i++) {
    console.log(highscore[i].name, highscore[i].score);
  }
  
  console.log("Send me screenshot if you scored more than high score\n");
  console.log("_____________________________________________");