// Write a JavaScript program to find all distinct prime factors of a given integer. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function primeFactors(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  const result = [];

  for (let i = 2; i <= num; i++) {
    while (isPrime(i) && num % i === 0) {
      if (!result.includes(i)) {
        result.push(i);
      }
      num /= i;
    }
  }

  return result;
}

r.question("Number: ", (answer) => {
  console.log(primeFactors(answer));
  r.close();
});
