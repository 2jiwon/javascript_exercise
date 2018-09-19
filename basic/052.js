// Write a JavaScript program to convert the letters of a given string in alphabetical order.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertStr(str) {
  return str.split('').sort().join('');
}

r.question("Enter a string : ", (answer) => {
  console.log(convertStr(answer));
  r.close();
});
