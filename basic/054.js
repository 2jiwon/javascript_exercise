// Write a JavaScript program to count the number of vowels in a given string. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countVowels(str) {
  let vNum = 0;

  for (let ch of str) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      vNum++;
    }
  }

  return vNum;
}

r.question("Enter a string : ", (answer) => {
  console.log(countVowels(answer));
  r.close();
});
