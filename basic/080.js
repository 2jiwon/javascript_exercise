// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
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
function swapArr(arr) {
  let newArr = [];
  newArr = arr.map((el, idx, arr) => parseInt(arr[idx]));

  if (newArr.length <= 1) {
    return newArr;
  }

  firstEl = newArr.shift();
  lastEl = newArr.pop();
  
  newArr.unshift(lastEl);
  newArr.push(firstEl);

  return newArr;
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(answer);
});

r.on('close', () => {
  console.log(swapArr(inputArr));
});
