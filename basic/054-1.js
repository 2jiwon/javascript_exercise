// Write a JavaScript program to count the number of vowels in a given string. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// w3resource solution
function countVowels(str) {
  return str.replce(/[^aeiou]/g, "").length;
}

r.question("Enter a string : ", (answer) => {
  console.log(countVowels(answer));
  r.close();
});
