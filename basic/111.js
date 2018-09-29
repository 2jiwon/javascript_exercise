// Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findEqual(n1, n2, n3) {
  if ((n1 !== n2) && (n1 !== n3) && (n2 !== n3)) {
    return 'Not any numbers are equal';
  }

  if (n1 === n2) {
    return n3;
  } else if (n1 === n3) {
    return n2;
  } else if (n2 === n3) {
    return n1;
  }
}

r.question("Number 1: ", (answer1) => {
  r.question("Number 2: ", (answer2) => {
    r.question("Number 3: ", (answer3) => {
      console.log(findEqual(answer1, answer2, answer3));
      r.close();
    });
  });
});
