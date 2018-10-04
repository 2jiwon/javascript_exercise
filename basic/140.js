// Write a JavaScript program to check if all the digits in a given number are the same or not.
//
function checkSame(num) {
  let nums = num.toString().split('');
  let result = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(checkSame(222));
console.log(checkSame(1234));
console.log(checkSame(1111111));
