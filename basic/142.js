// Write a JavaScript program to simplify a given absolute path for a file in Unix-style. 
//
function simplifyPath(str) {
  let newStr = str.split('/');

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].match(/[^\w]/g)) {
      newStr.splice(i, 1);
    }

    if (newStr[i] === '.') {
      newStr.splice(i, 1);
    }

    if (newStr[i] === '' && ((i !== 0) && (i !== newStr.length -1))) {
      // newStr[i] = newStr[i].replace('', '/');
      newStr.splice(i, 1);
    }
  }

  if (newStr.length <= 1 && newStr.includes(''))
    return '/';

  return newStr.join('/');
}

console.log(simplifyPath('/home/.././/html/'));
console.log(simplifyPath('/home/var/./wwww/../html//sql/'));
console.log(simplifyPath('/'));
console.log(simplifyPath('//'));
console.log(simplifyPath('.././'));
