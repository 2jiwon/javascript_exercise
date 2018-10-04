// Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.
//
function isRoundNumber(num) {
  return (num % 10 === 0) ? true : false;
}

function findRightmostRound(arr) {
  let roundPos = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    if (isRoundNumber(arr[i])) {
      roundPos = i;
      break;
    }
  }

  return roundPos;
}

console.log(findRightmostRound([1,22,30,54,56]));
console.log(findRightmostRound([1,22,32,54,56]));
console.log(findRightmostRound([1,22,32,54,50]));
