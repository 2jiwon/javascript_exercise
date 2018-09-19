// Write a JavaScript program to concatenate two strings and return the result. 
// If the length of the strings are not same then remove the characters from the longer string. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function concatString(str1, str2) {
  const min = Math.min(str1.length, str2.length);

  return str1.substring(str1.length - min) + str2.substring(str2.length - min);
}

r.question("Enter a string1 : ", (answer1) => {
  r.question("Enter a string2 : ", (answer2) => {
    console.log(concatString(answer1, answer2));
    r.close();
  });
});
