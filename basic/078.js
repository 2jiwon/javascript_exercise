// Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Press CTRL + d, when you're done`);
r.prompt();

let inputArr = [];
function testArr(arr) {
  let newArr = [];
  newArr = arr.map((el, idx, arr) => parseInt(arr[idx]))

  return (!newArr.includes(1) || !newArr.includes(3));
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(answer);
});

r.on('close', () => {
  console.log(testArr(inputArr));
});
