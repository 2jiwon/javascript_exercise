// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isSame(n1, n2) {
  return (n1 === n2);
}

function checkNum(n1, n2, n3) {
  if (isSame(n1, n2) && isSame(n2, n3)) {
    return 30;
  } else if (isSame(n1, n2) || isSame(n2, n3) || isSame(n1, n3)) {
    return 20;
  } else {
    return 40;
  }
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    r.question("Number 3 : ", (answer3) => {
      console.log(checkNum(+answer1, +answer2, +answer3));
      r.close();
    });
  });
});

    
