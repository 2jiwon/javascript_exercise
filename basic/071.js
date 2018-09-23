// Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. 
// The array length must be greater or equal to 1.
//

arr1 = [ 1, 3, 5 ];
arr2 = [ 1, 3, 5, 1 ];
arr3 = [ 2, 4, 6 ];

function checkArray(arr) {
  if (arr.length < 1) {
    return false;
  }

  return ((arr[0] === 1) || (arr[arr.length - 1] === 1));
}

console.log(checkArray(arr1));
console.log(checkArray(arr2));
console.log(checkArray(arr3));
