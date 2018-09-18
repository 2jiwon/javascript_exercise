// Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isGE20(n) {
  return (n >= 20);
}

function isLEthan(n1, n2) {
  return (n1 < n2);
}

function checkNum(n1, n2, n3) {
  return ((isGE20(n1) && (isLEthan(n1, n2) || isLEthan(n1, n3))) ||
    (isGE20(n2) && (isLEthan(n2, n1) || isLEthan(n2, n3))) ||
    (isGE20(n3) && (isLEthan(n3, n1) || isLEthan(n3, n2))));
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    r.question("Number 3 : ", (answer3) => {
      console.log(checkNum(+answer1, +answer2, +answer3));
      r.close();
    });
  });
});
