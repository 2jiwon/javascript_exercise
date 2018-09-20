// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
//
let arr1 = [ 10, 20, 30 ];
let arr2 = [ 0, -1, 2 ];
let arr3 = [ 7, 6, 5];

function rotateLeft(arr) {
  let shifted = arr.shift();
  arr.push(shifted);

  return arr;
}

console.log(rotateLeft(arr1));
console.log(rotateLeft(arr2));
console.log(rotateLeft(arr3));

