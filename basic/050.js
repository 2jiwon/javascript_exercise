// Write a JavaScript program to capitalize the first letter of each word of a given string. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

r.question("Enter a sentence : ", (answer) => {
  console.log(capitalize(answer));
  r.close();
});
