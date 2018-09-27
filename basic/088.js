// Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter two integers and one integer to divide. (Press CTRL + d when you're done)`);
r.prompt();

let num1 = 0;
let num2 = 0;
let num3 = 0;

function isDivisible(n1, n2, n3) {
  if ((n1 % n3 === 0) && (n2 % n3 === 0)) {
    return true;
  } else if ((n1 % n3 !== 0) && (n2 % n3 !== 0)) {
    return true;
  } else {
    return false;
  }
}

r.question("Num 1: ", (answer1) => {
  num1 = answer1;
  r.question("Num 2: ", (answer2) => {
    num2 = answer2;
    r.question("Num 3: ", (answer3) => {
      num3 = answer3;
      console.log(isDivisible(num1, num2, num3));
      r.close();
    });
  });
});
