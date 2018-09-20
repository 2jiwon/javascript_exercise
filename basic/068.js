// Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
// The string length must be greater or equal to n.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newStr(str, n) {
  if (str.length < n) {
    return str;
  }

  return str.substring(0, n) + str.substring(str.length - n);
}

r.question("Enter a string : ", (answer1) => {
  r.question("Enter a number : ", (answer2) => {
    console.log(newStr(answer1, +answer2));
    r.close();
  });
});
