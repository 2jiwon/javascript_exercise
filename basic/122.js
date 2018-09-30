// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence. 
//
function checkIncreasing(arr) {
  let direction = arr[1] - arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (direction * (arr[i + 1] - arr[i]) <= 0) {
      return false;
    }
  }
  return true;
}

console.log(checkIncreasing([1,2,3]));
console.log(checkIncreasing([1,2,2]));
console.log(checkIncreasing([-3,-2,-1]));
console.log(checkIncreasing([9,6,4]));
console.log(checkIncreasing([3,2,1]));
