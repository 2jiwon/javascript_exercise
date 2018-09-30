// Write a JavaScript program to find if the members of an given array of integers is a permutation of numbers from 1 to a given integer.
//
function isPermutation(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr.indexOf(i + 1) < 0) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation([1,2,3,4,5], 5));
console.log(isPermutation([1,3,4,5], 5));
