// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkChar(str, ch) {
  charNum = 0;

  for (let c of str) {
    if (c === ch) {
      charNum++;
    }
  }

  return (charNum >= 2 && charNum <= 4);
}

r.question("Enter a string : ", (answer1) => {
  r.question("Enter a character : ", (answer2) => {
    console.log(checkChar(answer1, answer2));
    r.close();
  });
});
