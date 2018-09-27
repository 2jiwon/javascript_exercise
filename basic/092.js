// Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
//
function diffOfTwo(arr) {
  let temp = 0;
  let maxDiff = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    maxDiff = Math.max(temp, maxDiff);
  }

  return maxDiff;
}

console.log(diffOfTwo([1,2,3,8,9]));
console.log(diffOfTwo([1,2,3,18,9]));
console.log(diffOfTwo([13,2,3,8,9]));
