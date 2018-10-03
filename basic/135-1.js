// Write a JavaScript program to remove all characters from a given string that appear more than once.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeChars(str) {
  // w3resource solution
  //
  const chars = str.split('');
  const result = [];

  // 문자가 하나 더 있으면 뒤에서부터의 index와 같지 않으므로 골라냄
  for (let i = 0; i < chars.length; i++) {
    if (str.indexOf(chars[i]) === str.lastIndexOf(chars[i])) {
      result.push(chars[i]);
    }
  }
  
  return result.join('');
}

r.question("Enter a string: ", (answer) => {
  console.log(removeChars(answer));
  r.close();
});
