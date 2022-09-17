var readlineSync = require("readline-sync");
console.log("Lets start the Quiz!");
console.log();
var userName = readlineSync.question("What is your name? ");
console.log();
console.log("Welcome " + userName + " to do you know me QUIZ? ");
console.log("Choose the right option.");
console.log();
score = 0;