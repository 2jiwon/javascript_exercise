// Write a JavaScript program to change the capitalization of all letters in a given string. 
//
function changeCapital(str) {
  let newStr = str.split('');

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].match(/[a-z]/g)) {
      newStr[i] = newStr[i].toUpperCase();
    } else if (newStr[i].match(/[A-Z]/g)) {
      newStr[i] = newStr[i].toLowerCase();
    }
  }

  return newStr.join('');
}

console.log(changeCapital('w3resource'));
console.log(changeCapital('Germany'));
