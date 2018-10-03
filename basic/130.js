// Write a JavaScript program to find the number of even digits in a given integer.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findEvenDigits(num) {
  let inputs = num.toString().split('');
  let evenDigits = 0;

  for (let el of inputs) {
    if (el % 2 === 0)
      evenDigits++;
  }

  return evenDigits;
}

r.question("Number: ", (answer) => {
  console.log(findEvenDigits(answer));
  r.close();
});
