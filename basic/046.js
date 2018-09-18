// Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isMultipleOf(n) {
  return (n % 7 === 0 || n % 11);
}

function checkNum(n1, n2) {
  if (n1 < 0 || n2 < 0) {
    return false;
  }

  //return ((n1 % 7 === 0) || (n1 % 11 === 0) || (n2 % 7 === 0) || (n2 % 11 === 0));
  if ((isMultipleOf(n1) && !isMultipleOf(n2)) || (!isMultipleOf(n1) && isMultipleOf(n2))) {
    return true;
  }
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkNum(+answer1, +answer2));
    r.close();
  });
});

