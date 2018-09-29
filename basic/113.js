// Write a JavaScript program to calculate the sum n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateSum(num) {
  let sum = Math.floor(num / 2) + Math.floor(num / 4) + Math.floor(num / 8) + num;
  return sum;
}

r.question("Number: ", (answer) => {
  console.log(calculateSum(+answer));
  r.close();
});
