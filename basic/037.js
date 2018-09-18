// Write a JavaScript program to create new string with first 3 characters are in lower case. 
// If the string length is less than 3 convert all the characters in upper case. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newString(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }

  lowerStr = str.substring(0, 3).toLowerCase();
  return lowerStr + str.substring(3, str.length);
}

r.question("Enter a string : ", (answer) => {
  console.log(newString(answer));
  r.close();
});
