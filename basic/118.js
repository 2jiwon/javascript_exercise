// Write a JavaScript program to check if a given number is in a given range.
//
function checkRange(n1, n2, n3) {
  return ((n2 >= n1) && (n2 <= n3));
}

console.log(checkRange(1,2,3));
console.log(checkRange(1,2,-3));
console.log(checkRange(1.1,1.2,1.3));
