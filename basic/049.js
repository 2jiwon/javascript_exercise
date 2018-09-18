// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function replaceChar(str) {
  const oriStr = str.split('');
  let newStr = [];

  for (let i = 0; i <= oriStr.length - 1; i++) {
    newStr[i] = oriStr[i].charCodeAt(0);
    
    if (newStr[i] === 'z'.charCodeAt()) {
      newStr[i] = 'a'.charCodeAt() - 1;
    } else if (newStr[i] === 'Z'.charCodeAt()) {
      newStr[i] = 'A'.charCodeAt() - 1;
    }

    newStr[i] = String.fromCharCode(newStr[i] + 1);
  }
  return newStr.join('');
}

r.question("Enter a string : ", (answer) => {
  console.log(replaceChar(answer));
  r.close();
});
