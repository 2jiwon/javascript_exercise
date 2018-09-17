// Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.

const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function abDifference(n) {
  if (n > 19) {
    return (n - 19) * 3;
  } else {
    return (19 - n);
  }
}

r.question("Number : ", (answer) => {
  console.log(abDifference(+answer));
  r.close();
});
