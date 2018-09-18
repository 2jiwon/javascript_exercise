// Write a JavaScript program to capitalize the first letter of each word of a given string. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// w3resource solution 
function capitalize(str) {
  let newStr = str.split(' ');

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
  }

  return newStr.join(' ');
}

r.question("Enter a sentence : ", (answer) => {
  console.log(capitalize(answer));
  r.close();
});
