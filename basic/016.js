//  Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sum(n1, n2) {
  if (n1 === n2) {
    return 3 * (n1 + n2);
  } else {
    return (n1 + n2);
  }
}

r.question("number 1 : ", (answer1) => {
  r.question("number 2 : ", (answer2) => {
    console.log(sum(+answer1, +answer2));
    r.close();
  });
});

