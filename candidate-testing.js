const input = require('readline-sync');


let candidateName;
let question;
let ask1stQuestion = "Who was the first American woman in space?";
 
let askName = ("Enter your name: ");

function assignCandName(askName) {
  candidateName = input.question(askName); 
return `Hello, ${candidateName}!`
}
console.log(assignCandName(askName));



function askQuestion (ask1stQuestion) {
  candAnswer1 = input.question(ask1stQuestion);
}

console.log(askQuestion(ask1stQuestion));

//questions
let questions = ["Who was the first American woman in space?", "True or false: 5000 meters = 5 Kilometers. ", "(5 + 3/2 * 10 = ", 'Given the array [8, "Orbit, "Trajectory", 45], what entry is at index 2? ', "What is the minimum crew size for the ISS? "];

let candAnswers8 = [];

function askAllQuestions(questions) {
  for (let i = 0; i < questions.length; i++) {
    provCandAnsw = input.question(questions[i]);
    candAnswers8.push(provCandAnsw);
  }
}

console.log(askAllQuestions(questions));

console.log(candAnswers8);


let correctAnswers = ["Sally Ride", "true", 40, "Trajectory", 3];

let candGrade = [];
//grade it

function gradeAnswers(candAnswers8) {
  for (let i = 0; i < candAnswers8.length; i++) {
    if (candAnswers8[i] == correctAnswers[i]) {
      candGrade.push(1); 
    } else {
      candGrade.push(0);
    }
    }
  }

console.log(candGrade);
/*
*/



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
