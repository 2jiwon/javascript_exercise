// Write a JavaScript program to check if a string starts with 'Java' and false otherwise. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkString(str) {
  starts = str.substring(0, 4);
  return (starts === 'Java');
}

r.question("Enter a string : ", (answer) => {
  console.log(checkString(answer));
  r.close();
});
