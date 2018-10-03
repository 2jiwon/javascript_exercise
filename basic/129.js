// Write a JavaScript program to find the smallest prime number strictly greater than a given number. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function smallestPrime(num) {
  num++;

  if (num <= 3)
    return num;

  while (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0)
    num++;

  return num;
}

r.question("Number: ", (answer) => {
  console.log(smallestPrime(answer));
  r.close();
});
