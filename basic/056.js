// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function divideNum(n1, n2) {
  num = (n1 > n2) ? Math.round(n1 / n2) : Math.round(n2 / n1);
  newStr = num.toString().split('');

  return newStr;
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(divideNum(+answer1, +answer2));
    r.close();
  });
});
