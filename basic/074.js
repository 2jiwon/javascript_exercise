// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. 
// Display the new array. 
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
function changeElement(arr) {
  return arr.map((el, idx, arr) => {
    let max = Math.max.apply(null, arr);
    return max;
  });
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(answer);
});

r.on('close', () => {
  console.log(changeElement(inputArr));
});
