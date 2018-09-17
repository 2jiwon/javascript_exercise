// Write a JavaScript program to check from two given integers, if one is positive and one is negative. 

const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkSign(n1, n2) {
  if (Math.sign(n1) < 0 && Math.sign(n2) < 0) {
    return false;
  } else if (Math.sign(n1) > 0 && Math.sign(n2) > 0) {
    return false;
  } else {
    return true;
  } 
}

r.question("Number 1 : ", (answer1) => {
  r.question("Number 2 : ", (answer2) => {
    console.log(checkSign(+answer1, +answer2));
    r.close();
  });
});

