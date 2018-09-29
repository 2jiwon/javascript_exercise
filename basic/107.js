// Write a JavaScript program to find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other one. 
//
function arrPairs(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] % arr[j] === 0) {
        result++;
        console.log(arr[i], arr[j]);
      } else if (arr[j] % arr[i] === 0) {
        result++;
        console.log(arr[j], arr[i]);
      }
    }
  }

  return result;
}

console.log(arrPairs([1,2,3]));
console.log(arrPairs([2,4,16]));
