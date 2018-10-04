// Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer. 
//
// *cube = 세제곱
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfcubes(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += Math.pow(i, 3);
  }

  return sum;
}

r.question("Number: ", (answer) => {
  console.log(sumOfcubes(answer));
  r.close();
});
