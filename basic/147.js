// Write a JavaScript program to compute the sum of all digits that occur in a given string. 
//
function sumOfdigits(str) {
  let newStr = str.split('');
  let nums = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].match(/\d/g)) {
      nums += parseInt(newStr[i]);
    }
  }

  return nums;
}

console.log(sumOfdigits('w3resource2'));
console.log(sumOfdigits('abcd12efg9'));
