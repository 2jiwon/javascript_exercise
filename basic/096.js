// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers. 
//
function absDiff(arr) {
  let diffSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    diffSum += Math.abs(arr[i] - arr[i + 1]);
  }

  return diffSum;
}

console.log(absDiff([1,2,3,2,-5]));
