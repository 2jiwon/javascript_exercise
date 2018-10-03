// Write a JavaScript program to check whether a given fraction is proper or not.
//
function isProperFraction(arr) {
  if (arr.length > 2)
    return false;

  if (parseInt(arr[0]) > parseInt(arr[1])) {
    return 'Improper fraction';
  } else {
    return 'Proper fraction';
  }

  // w3resource solution
  // return Math.abs(arr[0] / arr[1]) < 1 ? 'Proper fraction' : 'Improper fraction';
}

console.log(isProperFraction([12,300]));
console.log(isProperFraction([2,4]));
console.log(isProperFraction([103, 3]));
