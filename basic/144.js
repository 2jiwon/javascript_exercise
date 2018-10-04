// Write a JavaScript program to break an address of an url and put it's part into an array. 
//
function breakURL(str) {
  let newStr = str.replace(':', '').split('/');

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '')
      newStr.splice(i, 1);
  }

  return newStr;
}

console.log(breakURL('https://www.w3resource.com/javascript-exercises/'));
