// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. 
// Return the original string if the condition is not satisfied.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function newStr(str) {
  if ((str.substring(0, 1) === 'P') || (str.substring(str.length - 1) === 'P')) {
    //return str.substring(1, str.length - 1);
    return str.slice(1, -1);
  } else {
    return str;
  }
}

r.question("Enter a string : ", (answer) => {
  console.log(newStr(answer));
  r.close();
});
