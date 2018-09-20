// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkStr(str) {
  if (str.substring(0, 3) === 'Los') {
    return 'Los Angeles';
  } else if (str.substring(0, 3) === 'New') {
    return 'New York';
  } else {
    return '';
  }
}

r.question("Enter a string : ", (answer) => {
  console.log(checkStr(answer));
  r.close();
});
