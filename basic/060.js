// Write a JavaScript program to create a new string without the first and last character of a given string.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newString(str) {
  return str.replace(/^.|.$/g, '');

  // w3resource soulution
  // return str.substring(1, str.length - 1);
}

r.question("Enter a string : ", (answer) => {
  console.log(newString(answer));
  r.close();
});
