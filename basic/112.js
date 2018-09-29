// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return (num * factorial(num - 1));
}

function trailingZeros(num) {
  let facto = factorial(num);
  let result = 0;

  while (facto) {
    if (facto % 10 !== 0) {
      break;
    } else {
      result++;
    }

    facto = Math.floor(facto / 10);
  }

  return result;
}

r.question("Number: ", (answer) => {
  console.log(trailingZeros(answer));
  r.close();
});
