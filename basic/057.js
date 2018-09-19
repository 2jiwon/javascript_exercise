// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createString(str, n) {
  let newStr = ''; 

  while (n--) {
    newStr += str;
  }

  return newStr;
}

r.question("Enter a string : ", (answer1) => {
  r.question("Enter a number : ", (answer2) => {
    console.log(createString(answer1, +answer2));
    r.close();
  });
});
