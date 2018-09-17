// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newString(str) {
  if (str.length < 3) {
    return false;
  }

  ch = str.substring(str.length - 3);
  return ch + str + ch;
}

r.question("Enter a string : ", (answer) => {
  console.log(newString(answer));
  r.close();
});
