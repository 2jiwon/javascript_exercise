//  Write a JavaScript program to reverse the elements of a given array of integers length 3. 
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
function reverseArr(arr) {
  if (arr.length < 3) {
    return false;
  }

  return arr.reverse();
}

r.on('line', (answer) => {
  r.prompt();
  inputArr.push(answer);
});

r.on('close', () => {
  //console.log(inputArr);
  console.log(reverseArr(inputArr));
});
