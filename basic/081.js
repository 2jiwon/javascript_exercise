// Write a JavaScript program to add two digits of a given positive integer of length two. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter two positive integer digits (Press CTRL + d, when you're done.)`);
r.prompt();

function addDigits(n) {
  return (Math.floor(n / 10) + (n % 10));
}

r.on('line', (answer) => {
  r.prompt();
  console.log(addDigits(answer));
  r.close();
});
