// Write a JavaScript exercise to get the extension of a filename.
//
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Filename? ", (answer) => {
  let ext = answer.split('.').pop();
  console.log(`File extension is ${ext}`);
  r.close();
});

