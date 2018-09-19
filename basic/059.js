// Write a JavaScript program to extract the first half of a string of even length. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractStr(str) {
  if (str.length % 2 !== 0) {
    return str;
  }

  return str.substring(0, (str.length / 2));

  // w3resource solution
  // return str.slice(0, str.length / 2);
}

r.question("Enter a string : ", (answer) => {
  console.log(extractStr(answer));
  r.close();
});
