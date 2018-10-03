// Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character. 
//
function replaceDigit(str) {
  return str.replace(/[0-9]/, '$');
}

console.log(replaceDigit('ab123c'));
