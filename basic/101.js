// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions. 
//
function checkStr(str) {
  if (/\D/.test(str) && !(/[A-Z]{2}/.test(str)) && !(/[a-z]{2}/.test(str))) {
    return true;
  }
  return false;
}

console.log(checkStr('xYr'));
console.log(checkStr('XXyx'));
console.log(checkStr('A1xYx'));
console.log(checkStr('21xYx'));
console.log(checkStr('.?-AbCD'));
