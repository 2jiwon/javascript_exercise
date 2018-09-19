// Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkStr(str) {
  if (str.length < 6) {
    return str;
  }

  return (str.substring(str.length - 6) === 'Script'); 
}

r.question("Enter a string : ", (answer) => {
  console.log(checkStr(answer));
  r.close();
});
