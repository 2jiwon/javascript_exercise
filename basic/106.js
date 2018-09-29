// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function divideInt(n1, n2) {
  if (n2 === 1) {
    return n1;
  }

  while (n1 % n2 === 0) {
    n1 /= n2;
  }

  return n1;
}

r.question("Number1: ", (answer1) => {
  r.question("Number2: ", (answer2) => {
    console.log(divideInt(answer1, answer2));
    r.close();
  });
});
