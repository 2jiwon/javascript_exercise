// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Enter two integers and one integer to calculate. (Press CTRL + d when you're done)`);

let num1 = 0;
let num2 = 0;
let num3 = 0;

function replaceExpression(n1, n2, n3) {
  if ((n1 + n2 === n3) || (n1 * n2 === n3) || (n1 / n2 === n3) || (n1 - n2 === n3)) {
    return true;
  }
  return false;
}

r.question("Num 1: ", (answer1) => {
  num1 = parseInt(answer1);
  r.question("Num 2: ", (answer2) => {
    num2 = parseInt(answer2);
    r.question("Num 3: ", (answer3) => {
      num3 = parseInt(answer3);
      console.log(replaceExpression(num1, num2, num3));
      r.close();
    });
  });
});
