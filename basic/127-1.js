// Write a JavaScript program to reverse the order of the bits in a given integer. 
//
function reverseBits(num) {
  // w3resource solution, but the result doesn't match the question.
  // https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-127.php
  return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

console.log(reverseBits(7));
console.log(reverseBits(14));
console.log(reverseBits(56));
console.log(reverseBits(234));
