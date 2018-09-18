// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumInt(n1, n2) {
  return (n1 + n2);
}

function checkRange(n) {
  if (n >= 50 && n <= 80) {
    return 65;
  } else {
    return 80;
  }
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkRange(sumInt(+answer1, +answer2)));
    r.close();
  });
});

