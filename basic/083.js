// Write a JavaScript to find the longest string from an given array of strings.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter an array of strings (Press CTRL + d, when you're done)`);
r.prompt();

let strings = [];
function findStrings(arr) {
  let max = arr[0].length;
  let maxStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      maxStr = arr[i];
    }
  }

  return maxStr;
}

r.on('line', (answer) => {
  r.prompt();
  strings.push(answer);
});

r.on('close', () => {
  console.log(findStrings(strings));
});
