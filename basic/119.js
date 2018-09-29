// Write a JavaScript program to check if a given integer has an increasing digits sequence.
//
const readline = require('readline');
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkIncreasing(num) {
  let nums = num.toString().split('');

  for (let i = 0; i < nums.length - 1; i++) {
    if (parseInt(nums[i]) >= parseInt(nums[i+1])) {
      return false;
    }
  }
  return true;
}

r.question("Number : ", (answer) => {
  console.log(checkIncreasing(answer));
  r.close();
});
