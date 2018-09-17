// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkNumbers(n1, n2) {
  return ((n1 + n2 === 50) || (n1 === 50) || (n2 === 50));
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkNumbers(+answer1, +answer2));
    r.close();
  });
});
