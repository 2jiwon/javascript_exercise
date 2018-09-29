// Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.
//
function deleteOne(num) {
  const numDigits = [];
  let result = 0;

  // numDigits에 n을 1자리씩 잘라서 거꾸로 집어넣기
  while (num) {
    numDigits.push(num % 10);
    num = Math.floor(num / 10);
  }

  // numDigits를 하나씩 제외하면서 합을 계산하는 과정
  for (let idx = 0; idx < numDigits.length; idx++) {
    let n = 0;

    // idx에 해당하는 자릿수를 제외한 합 계산
    for (let i = numDigits.length - 1; i >= 0; i--) {
      if (i !== idx) {
        n = n * 10 + numDigits[i];
      }
    }
    // 계산한 합 중에서 큰 것을 가려냄
    result = Math.max(n, result);
  }

  return result;
}

console.log(deleteOne(100));
console.log(deleteOne(279));
console.log(deleteOne(1245));
console.log(deleteOne(732));
