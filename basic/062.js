// Write a JavaScript program to move last three character to the start of a given string. 
// The string length must be greater or equal to three.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function moveString(str) {
  if (str.length < 3) {
    return str;
  }

  endP = str.length - 3;
  return str.substring(endP) + str.substring(0, endP);

  // W3resource solution
  // return str.slice(-3) + str.slice(0, -3);
}

r.question("Enter a string : ", (answer) => {
  console.log(moveString(answer));
  r.close();
});
