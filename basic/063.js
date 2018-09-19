// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
// The string length must be greater or equal to three. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function moveString(str) {
  if ((str.length < 3) || (str.length % 2 === 0)) {
    return str;
  }

  midP = Math.ceil((str.length - 1) / 2);
  return str.substring(midP - 1, midP + 2);

  // w3resource solution
  // mid = (str.length + 1) / 2;
  // return str.slice(mid - 2, mid + 1);
}

r.question("Enter a string : ", (answer) => {
  console.log(moveString(answer));
  r.close();
});
