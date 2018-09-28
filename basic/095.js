// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers. 
//
function replaceAll(arr, n, spn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      newArr[i] = spn;
    } else {
      newArr[i] = arr[i];
    }
  }
  
  console.log('Original: ', arr);
  return newArr;
}

console.log(replaceAll([1,2,3,2,2,8,1,9], 2, 5));
