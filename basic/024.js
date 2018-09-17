// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newString(str) {
  ch = str.substring(0, 1);
  return ch + str + ch;
}

r.question("Enter a string : ", (answer) => {
  console.log(newString(answer));
  r.close();
});
