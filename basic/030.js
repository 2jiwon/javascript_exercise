// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, 
// if "Script" presents in the string return the string without "Script" otherwise return the original one.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkString(str) {
  string = str.substring(4, 10);

  if (string === 'Script') {
    return str.substring(0, 4) + str.substring(10, str.length);
  } else {
    return str;
  }
}

r.question("Enter a string : ", (answer) => {
  console.log(checkString(answer));
  r.close();
});

