let userAnswer = document.getElementById("user_answer");
let reply = document.getElementById("reply");
let mathProblem = document.getElementById("math_problem");
let mathType = "";
let correctAnswer;
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const multiplicationTable = document.getElementById("multiplication-table");
const currentOption = document.getElementById("current-option");
const answerForm = document.getElementById("answer-form");
const nextButton = document.getElementById("next-button");
const totalScore = document.getElementById("score");
let answer;
let score = 0;
let total = 0;

//Check if the answer is correct and write the reply on the screen
const checkAnswer = function (answer) {
  const previousProblem = mathProblem.innerHTML;
  if (mathType === "") {
    reply.innerHTML = "You haven't choosen what to practice on.";
  } else if (correctAnswer === answer) {
    reply.innerHTML = `Previous problem: ${previousProblem}<br>You answered: ${answer} <br>Correct! Well done :)`;
    score += 1;
    total += 1;
    totalScore.innerHTML = score + " / " + total;
  } else {
    reply.innerHTML = `Previous problem: ${previousProblem}<br>You answered: ${answer} <br>That's not quite right. Correct answer is: <span>${correctAnswer}</span>. Try another one.`;
    total += 1;
    totalScore.innerHTML = score + " / " + total;
  }
};

//Defines what happens when user presses enter or the Submit button
//Save the answer
//Reset the answer field
answerForm.addEventListener("submit", function (event) {
  answer = userAnswer.value;
  event.preventDefault();
  answerForm.reset();
  checkAnswer(answer);
  generateProblem();
});

addition.onclick = function () {
  mathType = "addition";
  generateProblem();
  addition.className = "active-option";
  subtraction.className = "option";
  multiplication.className = "option";
  division.className = "option";
};
subtraction.onclick = function () {
  mathType = "subtraction";
  generateProblem();
  addition.className = "option";
  subtraction.className = "active-option";
  multiplication.className = "option";
  division.className = "option";
};
multiplication.onclick = function () {
  mathType = "multiplication";
  generateProblem();
  addition.className = "option";
  subtraction.className = "option";
  multiplication.className = "active-option";
  division.className = "option";
};
division.onclick = function () {
  mathType = "division";
  generateProblem();
  addition.className = "option";
  subtraction.className = "option";
  multiplication.className = "option";
  division.className = "active-option";
};
multiplicationTable.onclick = function () {
  mathType = "multiplicationTable";
  generateProblem();
  multiplicationTable.className("active-option");
  addition.className = "option";
  subtraction.className = "option";
  multiplication.className = "option";
  division.className = "option";
};

nextButton.onclick = function () {
  generateProblem();
  reply.innerHTML = "";
};

/*A function that generate a math problem depending on which calculation method
 the user has chosen to practice with.*/
const generateProblem = function () {
  if (mathType === "subtraction") {
    let numA = Math.floor(Math.random() * 10000);
    let numB = Math.floor(Math.random() * 10000);
    if (numB > numA) {
      mathProblem.innerHTML = numB + " - " + numA;
      return (correctAnswer = (numB - numA).toString());
    } else {
      mathProblem.innerHTML = numA + " - " + numB;
      return (correctAnswer = (numA - numB).toString());
    }
  } else if (mathType === "addition") {
    let numA = Math.floor(Math.random() * 10000);
    let numB = Math.floor(Math.random() * 10000);

    mathProblem.innerHTML = numA + " + " + numB;
    return (correctAnswer = (numA + numB).toString());
  } else if (mathType === "multiplication") {
    let numA = Math.floor(Math.random() * 100);
    let numB = Math.floor(Math.random() * 100);
    mathProblem.innerHTML = numA + " * " + numB;
    return (correctAnswer = (numA * numB).toString());
  } else if (mathType === "division") {
    let numA = Math.floor(Math.random() * 100);
    let numB = Math.floor(Math.random() * 100);
    if (numB > numA) {
      mathProblem.innerHTML = numB + " / " + numA;
      return (correctAnswer = (numB / numA).toString());
    } else {
      mathProblem.innerHTML = numA + " / " + numB;
      return (correctAnswer = (numA / numB).toString());
    }
  } else if (mathType === "multiplicationTable") {
    let numA = Math.floor(Math.random() * 12);
    let numB = Math.floor(Math.random() * 12);
    mathProblem.innerHTML = numA + " * " + numB;
    return (correctAnswer = (numA * numB).toString());
  } else {
    mathProblem.innerHTML =
      "Choose what you want to practice on from the menu above.";
  }
};
