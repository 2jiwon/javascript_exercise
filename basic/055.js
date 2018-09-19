// Write a JavaScript program to check if a given string contains equal number of p's and t's present.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkStr(str) {
  pNum = str.match(/[^pP]/g).length;
  tNum = str.match(/[^tT]/g).length;

  return (pNum === tNum);
}

r.question("Enter a string : ", (answer) => {
  console.log(checkStr(answer));
  r.close();
});
