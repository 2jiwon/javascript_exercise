// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function digitOne(num) {
  const digitSum = num => {
    let sum = 0;

    while (num) {
      sum += (num % 10);
      num = Math.floor(num / 10);
    }

    return sum;
  };

  let result = 0;

  while (num >= 10) {
    result++;
    num = digitSum(num);
  }

  return result;
}

r.question("Number : ", (answer) => {
  console.log(digitOne(answer));
  r.close();
});
