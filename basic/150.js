// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
//
function swapAdjacent(num) {
  let newNum = num.toString().split('');

  if (newNum.length % 2 !== 0) 
    return false;

  for (let i = 0; i < newNum.length; i++) {
    if (i % 2 === 0) {
      j = i + 1;
      temp = newNum[i];
      newNum[i] = newNum[j];
      newNum[j] = temp;
    }
  }

  return parseInt(newNum.join('')); 
}

console.log(swapAdjacent(1234));
console.log(swapAdjacent(123456));
console.log(swapAdjacent(12345));
