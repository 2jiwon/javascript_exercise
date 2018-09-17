// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeChar(str, p) {
  str1 = str.substring(0, p);
  str2 = str.substring(p + 1, str.length);

  return str1 + str2;
}

r.question("Enter a string : ", (answer1) => {
  r.question("Enter a position number : ", (answer2) => {
    console.log(removeChar(answer1, +answer2));
    r.close();
  });
});
