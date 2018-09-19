// Write a JavaScript program to concatenate two strings except their first character.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function concatString(str1, str2) {
  return str1.substring(1) + str2.substring(1);
}

r.question("Enter a string 1 : ", (answer1) => {
  r.question("Enter a string 2 : ", (answer2) => {
    console.log(concatString(answer1, answer2));
    r.close();
  });
});
