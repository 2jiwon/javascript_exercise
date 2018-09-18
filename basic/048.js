// Write a JavaScript program to reverse a given string. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
  return str.split('').reverse().join('');
}

r.question("Enter a string : ", (answer) => {
  console.log(reverseString(answer));
  r.close();
});
