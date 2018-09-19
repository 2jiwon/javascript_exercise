// Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkChar(str) {
  return (/a...b/).test(str) || (/b...a/).test(str);
}

r.question("Enter a string : ", (answer) => {
  console.log(checkChar(answer));
  r.close();
});
