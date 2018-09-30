// Write a JavaScript program to get the largest even number from an array of integers.
//
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//
function largestEven(arr) {
  let newArr = [];

  newArr = arr.filter((cur) => cur % 2 === 0).sort((a, b) => a - b);

  return newArr[newArr.length-1];
}

console.log(largestEven([1,2,4,5,6,8]));
console.log(largestEven([20,40,200]));
console.log(largestEven([20,400,220]));
