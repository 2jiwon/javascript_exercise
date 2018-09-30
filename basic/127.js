// Write a JavaScript program to reverse the order of the bits in a given integer. 
//
function toBits(num) {
  let bits = [];

  for (let i = 7; i >= 0; i--) {
    if (num < 0) {
      break;
    }
    bits[i] = num % 2;
    num = Math.floor(num / 2);
  }

  return bits;
}

function bitsTodecimal(arr) {
  let dec = 0;

  for (let i = 0; i < 8; i++) {
    dec += arr[i] * Math.pow(2, (7-i));
  }

  return dec;
}

function reverseBits(num) {
  let temp = [];

  temp = toBits(num);
  return bitsTodecimal(temp.reverse());
}

console.log(reverseBits(7));
console.log(reverseBits(14));
console.log(reverseBits(56));
console.log(reverseBits(234));
