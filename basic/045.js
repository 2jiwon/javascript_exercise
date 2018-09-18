// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkNum(n1, n2) {
  return ((n1 === 15) || (n2 === 15) || (n1 + n2 === 15) || Math.abs(n1 - n2) === 15);
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkNum(+answer1, +answer2));
    r.close();
  });
});
