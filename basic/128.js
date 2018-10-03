// Write a JavaScript program to find the smallest round number that is not less than a given value. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function smallestRound(num) {
  while (num % 10) 
    num++;

  return num;
}

r.question("Number: ", (answer) => {
  console.log(smallestRound(answer));
  r.close();
});
