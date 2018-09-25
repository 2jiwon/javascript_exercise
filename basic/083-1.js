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

  // w3resource solution
  let max = arr[0].length;

  arr.map(el => max = Math.max(max, el.length));
  result = arr.filter(el => el.length === max);
  return result;
}

r.on('line', (answer) => {
  r.prompt();
  strings.push(answer);
});

r.on('close', () => {
  console.log(findStrings(strings));
});
