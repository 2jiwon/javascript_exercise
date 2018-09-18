// Write a JavaScript program to check if the last digit of the three given positive integers is same.  
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getLastdigit(n) {
  return n % 10;
}

function checkDigit(n1, n2, n3) {
  d1 = getLastdigit(n1);
  d2 = getLastdigit(n2);
  d3 = getLastdigit(n3);

  if (d1 == d2 && d1 == d3 && d2 == d3){
    return true;
  } else {
    return false;
  }

}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    r.question("Number 3 : ", (answer3) => {
      console.log(checkDigit(+answer1, +answer2, +answer3));
      r.close();
    });
  });
});
