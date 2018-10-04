// Write a JavaScript program to swap two halves of a given array of integers of even length. 
//
function swapHalves(arr) {
  if (arr.length % 2 !== 0)
    return false;

  let half = arr.length / 2;

  for (let i = 0, j = half; i < half; i++, j++) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

console.log(swapHalves(['a','b','c','x','y','z']));
console.log(swapHalves([1,2,3,4,5,6]));
console.log(swapHalves([1,2,3,4,5,6,7]));
