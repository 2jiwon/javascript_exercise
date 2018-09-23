// Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  
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
  newArr = arr.map((el, idx, arr) => parseInt(arr[idx]));

  if (newArr.length <= 1) {
    return false;
  }
  //return (newArr.every(el => el === 30) || newArr.every(el => el === 40));

  let num1 = 0;
  let num2 = 0;
  for (let el of newArr) {
    if (el === 30) {
      num1++;
    } else if (el === 40) {
      num2++;
    }
  }
  return (num1 === 2 || num2 === 2);
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(answer);
});

r.on('close', () => {
  console.log(testArr(inputArr));
});
