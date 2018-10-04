// Write a JavaScript program to change the capitalization of all letters in a given string. 
//
function changeCapital(str) {
  // w3resource solution
  let str1 = '';

  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      str1 += str[i].toLowerCase();
    } else {
      str1 += str[i].toUpperCase();
    }
  }

  return str1;
}

console.log(changeCapital('w3resource'));
console.log(changeCapital('Germany'));
