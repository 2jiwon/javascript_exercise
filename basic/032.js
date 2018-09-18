// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function nearest(n1, n2) {
  if (n1 === n2) {
    return false;
  } else {
    return ((100 - n1) > (100 - n2)) ? n2 : n1;
  }
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(nearest(+answer1, +answer2));
    r.close();
  });
});
