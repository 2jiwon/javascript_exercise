// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function primeNum(num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (i === 2 || i === 3) {
      primes.push(i);
    } else if (i % 2 !== 0 && i % 3 !== 0) {
      primes.push(i);
    }
  }

  return primes;
}

r.question("Number: ", (answer) => {
  console.log(primeNum(answer));
  r.close();
});
