// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rearrangeStr(str1, str2) {
  return (str1.split('').sort().join('') === str2.split('').sort().join(''));
}

r.question('String 1 : ', (answer1) => {
  r.question('String 2 : ', (answer2) => {
    console.log(rearrangeStr(answer1, answer2));
    r.close();
  });
});
