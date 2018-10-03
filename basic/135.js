// Write a JavaScript program to remove all characters from a given string that appear more than once.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeChars(str) {
  const chars = {};

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

   for (let char in chars) {
     if (chars[char] > 1) {
       delete chars[char];
     }
   }

  return Object.keys(chars).join('');
}

r.question("Enter a string: ", (answer) => {
  console.log(removeChars(answer));
  r.close();
});
