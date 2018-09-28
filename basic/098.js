// Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Enter a string to change case (Press CTRL + d when you're done).`);

function changeCase(str) {
  let upp = 0;
  let low = 0;

  for (let char of str) {
    (/[A-Z]/.test(char)) ?  upp++ : low++;
  }

  return (upp > low) ? str.toUpperCase() : str.toLowerCase();
}

r.question('> ', (answer) => {
  console.log(changeCase(answer));
  r.close();
});
