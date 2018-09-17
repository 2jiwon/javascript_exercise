// Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). 
// Return true if one or more of them are in the said range. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRange(n1, n2, n3) {
  return ((n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99));  
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    r.question("Number 3 : ", (answer3) => {
      console.log(checkRange(+answer1, +answer2, +answer3));
      r.close();
    });
  });
});
