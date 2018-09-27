// Write a JavaScript program to find the types of a given angle. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter a angle to find types (Press CTRL + d when you're done)`);
r.prompt();

function typeOfangle(n) {
  if (n >= 0 && n < 90) {
    console.log('Acute angle');
  } 
  if (n === 90) {
    console.log('Right angle');
  } 
  if (n > 90 && n < 180) {
    console.log('Obtuse angle');
  } 
  if (n === 180) {
    console.log('Straight angle');
  } 
}

r.on('line', (answer) => {
  r.prompt();
  typeOfangle(parseInt(answer));
  r.close();
});
