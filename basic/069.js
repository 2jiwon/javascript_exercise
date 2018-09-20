// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  
//

const arr1 = [ 10, 20, 30 ];

function sumOfarray(arr) {
  if (arr.length !== 3) {
    return false;
  }

  return arr.reduce(( acc, val ) => acc + val, 0);
}

console.log(sumOfarray(arr1));
