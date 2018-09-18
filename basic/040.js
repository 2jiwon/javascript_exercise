// Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function check8(n1, n2) {
  return (n1 === 8 || n2 === 8 || (n1 + n2) === 8 || Math.abs(n1 - n2) === 8)
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(check8(+answer1, +answer2));
    r.close();
  });
});
