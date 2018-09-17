// Write a JavaScript program to check a given integer is within 20 of 100 or 400.

const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkWithin(n) {
  return ((Math.abs(100 - n) <= 20) || (Math.abs(400 - n) <= 20));
}

r.question("Number : ", (answer) => {
  console.log(checkWithin(+answer));
  r.close();
});
