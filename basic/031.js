// Write a JavaScript program to find the largest of three given integers.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function largest(n1, n2, n3) {
  lgn = (n1 > n2 && n1 > n3) ? n1 : 
    (n2 > n1 && n2 > n3) ? n2 : n3;
  return lgn;
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    r.question("Number 3 : ", (answer3) => {
      console.log(largest(+answer1, +answer2, +answer3));
      r.close();
    });
  });
});
