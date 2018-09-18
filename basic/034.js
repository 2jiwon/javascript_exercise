// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRange(n1, n2) {
  if ((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60)) {
    return (n1 > n2) ? n1 : n2;
  } else {
    return false;
  }
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkRange(+answer1, +answer2));
    r.close();
  });
});
