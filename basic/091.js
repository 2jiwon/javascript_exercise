// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.
//
function sumOfk(arr, k) {
  let tempSum = 0;
  let result = 0;

  for (let i = 0; i < k - 1; i++) {
    // sum before kth
    tempSum += arr[i];
  }

  for (i = k - 1; i < arr.length; i++) {
    // add the 'kth'(tail)
    tempSum += arr[i];
    
    if (tempSum > result) {
      result = tempSum;
    }
    // minus the head
    tempSum -= arr[i - k + 1];
  }

  return result;
}

console.log(sumOfk([1,2,3,14,5], 2));
console.log(sumOfk([2,3,5,1,6], 3));
console.log(sumOfk([9,3,5,1,7], 2));
