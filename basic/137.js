// Write a JavaScript program to test if a given integer is greater than 15 return the given number, otherwise return 15. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isGreaterThan15(num) {
  return (num > 15) ? num : 15;
}

r.question("Number: ", (answer) => {
  console.log(isGreaterThan15(answer));
  r.close();
});
