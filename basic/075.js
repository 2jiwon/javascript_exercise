// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
//
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 1, 5, 6 ];

function takeMiddle(arr1, arr2) {
  let newArr = [];
  newArr.push(arr1[1], arr2[1]);
    
  return newArr;
}

console.log(takeMiddle(arr1, arr2));
