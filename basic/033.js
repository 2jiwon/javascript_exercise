// Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRange(n1, n2) {
  if ((n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60)) {
    return true;
  } else if ((n1 >= 70 && n1 <= 100) && (n2 >= 70 && n2 <= 100)) {
    return true;
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
