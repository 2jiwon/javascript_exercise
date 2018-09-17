// Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addString(str) {
  if (str.includes('Py')) {
    return str;
  } else {
    return 'Py' + str;
  }
}

r.question('Enter a string : ', (answer) => {
  console.log(addString(answer));
  r.close();
});

