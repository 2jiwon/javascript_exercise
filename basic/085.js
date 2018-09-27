// Write a JavaScript code to divide an given array of positive integers into two parts. 
// First element goes to first part, second element goes to second part, and third element goes to first part and so on. 
// Now compute the sum of two parts and store into an array of size two. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter positive integers (Press CTRL + d when you're done)`);
r.prompt();

let inputArr = [];
function dividedeArray(arr) {
  let newArr = [ 0, 0 ];

  for (let i = 0; i < arr.length; i++) {
    if ((i % 2) !== 0) {
      newArr[1] += arr[i];
    } else {
      newArr[0] += arr[i];
    }
  }

  return newArr;
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(parseInt(answer));
});

r.on('close', () => {
  console.log(dividedeArray(inputArr));
});
