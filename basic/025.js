// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkNumber(n) {
  return (n % 3 === 0 || n % 7 === 0);
}

r.question("Enter a positive number : ", (answer) => {
  console.log(checkNumber(+answer));
  r.close();
});
