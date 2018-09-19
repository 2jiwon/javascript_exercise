// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createNewString(str) {
  if (str.length < 3) {
    return false;
  }

  return str.substring(str.length - 3).repeat(4);
}

r.question("Enter a string : ", (answer) => {
  console.log(createNewString(answer));
  r.close();
});
