// Write a JavaScript program to create the value of NOR of two given booleans. 
//
function isNor(bool1, bool2) {
  return (!bool1 && !bool2) ? true : false;
}

console.log(isNor(true, true));
console.log(isNor(false, false));
console.log(isNor(true, false));

