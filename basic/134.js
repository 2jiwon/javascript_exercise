// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
//
function changeChar(str) {
  const inputs = str.split('');
  let newStr = [];

  const aChar = 'a'.charCodeAt(0);
  const zChar = 'z'.charCodeAt(0);

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] <= 'm'.charCodeAt(0)) {
      newStr.push(String.fromCharCode(zChar - (inputs[i].charCodeAt(0) - aChar)));
    } else {
      newStr.push(String.fromCharCode(aChar + (zChar - inputs[i].charCodeAt(0))));
    }
  }

  return newStr.join('');
}

console.log(changeChar('abc'));
console.log(changeChar('abcxyz'));
console.log(changeChar('python'));
console.log(changeChar('lmnop'));
