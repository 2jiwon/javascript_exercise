// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1. 
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
function newArr(arr) {
  let newArray = [];
  newArray.push(arr[0], arr[arr.length - 1]);
  return newArray;
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(answer);
});

r.on('close', () => {
  console.log(newArr(inputArr));
});
