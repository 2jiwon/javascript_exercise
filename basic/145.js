// Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= an given integer.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMaxInt(num) {
  let maxNum = 0;
  let sum = 0;

  while (sum <= num) {
    maxNum++;
    sum += maxNum;
  }

  return maxNum - 1;
}

r.question("Number: ", (answer) => {
  console.log(findMaxInt(answer));
  r.close();
});
