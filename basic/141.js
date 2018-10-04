// Write a JavaScript program to find the number of elements which presents in both of the given arrays.
//
function findElemnets(arr1, arr2) {
  let nums = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      nums++;
    }
  }

  return nums;
}

console.log(findElemnets([1,2,3,4], [1,2,3,4]));
console.log(findElemnets([1,2,3,4], [1,2,3,5]));
console.log(findElemnets([1,2,3,4], [11,22,33,44]));
