// Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3. 
//

const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Press CTRL + d, when you're done.`);
r.prompt();

let arrays = [];
r.on('line', (answer) => {
  r.prompt();
  arrays.push(answer);
});

function checkArray(arr) {
  if (arr.length < 3) {
    return false;
  }
  return (arr[0] === arr[arr.length -1]);
}

r.on('close', () => {
  console.log(arrays);
  console.log(checkArray(arrays));
});
