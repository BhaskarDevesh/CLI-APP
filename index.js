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