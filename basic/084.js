// Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Enter a string (Press CTRL + d, when you're done)`);
r.prompt();

function replaceString(str) {
  let newArr = str.split('');
  let diff = 'z'.charCodeAt(0) - 'a'.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    if (newArr[i].charCodeAt(0) === 'z'.charCodeAt(0) || newArr[i].charCodeAt(0) === 'Z'.charCodeAt(0)) {
      newArr[i] = String.fromCharCode(newArr[i].charCodeAt(0) - diff);
    } else {
      newArr[i] = String.fromCharCode(newArr[i].charCodeAt(0) + 1);
    }
  }

  return newArr.join('');
}

r.on('line', (answer) => {
  r.prompt();
  console.log(replaceString(answer));
  r.close();
});
