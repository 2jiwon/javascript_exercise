// Write a JavaScript to add two positive integers without carry.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter two positive integers (Press CTRL + d when you're done.)`);
r.prompt();

function addIntegers(n1, n2) {
  let result = 0;
  let x = 1;

  while((n1 > 0) && (n2 > 0)) {
    result += (x * ((n1 + n2) % 10));
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10;
  }

  return result;
}

function takeInputs(number, callback) {
  r.question(`${number} : `, (answer) => {
    let num = new Number(answer);

    callback(num);
  });
}

takeInputs(1, (num1) => {
  takeInputs(2, (num2) => {
    console.log(addIntegers(num1, num2));
    r.close();
  });
});
