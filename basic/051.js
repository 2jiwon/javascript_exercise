// Write a JavaScript program to convert a given number to hours and minutes.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertToTime(n) {
  hours = Math.floor(n / 60);

  if (hours > 24) {
    hours = Math.floor(hours / 60);
  }
  minutes = Math.ceil(n % 60);

  console.log(`${hours} : ${minutes}`);
}

r.question("Enter a number to conver Time : ", (answer) => {
  convertToTime(+answer);
  r.close();
});
