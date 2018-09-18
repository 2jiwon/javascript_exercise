// Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).
// For example 40 presents in 400 and 4000
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRange(n1, n2) {
  if ((n1 >= 40 && n1 <= 10000) && (n2 >= 40 && n2 <= 10000)) {
    if ((n1 % n2 === 0) || (n2 % n1 === 0)) {
      return true;
    }
  }

  return false;
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkRange(+answer1, +answer2));
    r.close();
  });
});
