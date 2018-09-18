// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRDigit(n) {
  if (Math.sign(n) < 0) {
    return false;
  } else {
    return n % 10;
  }
}

function checkRDigit(n1, n2, n3) {
  d1 = getRDigit(n1);
  d2 = getRDigit(n2);
  d3 = getRDigit(n3);

  return (d1 === d2 && d2 === d3) ? true :
    (d1 === d2 || d2 === d3 || d1 === d3) ? true : false;
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    r.question("Number 3 : ", (answer3) => {
      console.log(checkRDigit(+answer1, +answer2, +answer3));
      r.close();
    });
  });
});
