// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
//
function isDivisible(str) {
  let digitSum = 0;
  const left = '0'.charCodeAt();
  const right = '9'.charCodeAt();
  const result = [];
  const mask_data = str.split('');
  let hash_pos = -1;

  for (let i = 0; i < mask_data.length; i++) {

    // mask_data[i]가 숫자인지 판별
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right) {
      // 해당 숫자를 digitSum에 더하기
      digitSum += mask_data[i].charCodeAt() - left;
    } else {
      // 숫자가 아니면 그 위치가 hash문자
      hash_pos = i;
    }
  }

  // hash문자 위치에 들어갈 숫자찾기
  for (let i = 0; i < 10; i++) {
    // digitSum에 해당 숫자를 더한 값이 3으로 나뉘어지면 됨
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(isDivisible('2#0'));
console.log(isDivisible('4#2'));
console.log(isDivisible('4#3'));

