// Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them are in the said range.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRange(n1, n2) {
  if (n1 < 50 || n1 > 99 || n2 < 50 || n2 > 99) {
    return false;
  }
  return true;
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkRange(+answer1, +answer2));
    r.close();
  });
});
