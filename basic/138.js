// Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer. 
//
function toBits(num) {
  let bits = [];

  for (let i = 15; i >= 0; i--) {
    if (num < 0) {
      break;
    }
    bits[i] = num % 2;
    num = Math.floor(num / 2);
  }

  return bits;
}

function bitsToDecimal(arr) {
  let dec = 0;

  for (let i = 0; i < 16; i++) {
    dec += arr[i] * Math.pow(2, (15 - i));
  }

  return dec;
}

function reverseBits(num) {
  let temp = [];

  temp = toBits(num);
  return bitsToDecimal(temp.reverse());
}

console.log(reverseBits(12345));
console.log(reverseBits(10));
console.log(reverseBits(5));
