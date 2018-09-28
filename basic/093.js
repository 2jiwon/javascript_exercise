// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
//
function selectionSort(arr) {
  let sortedArr = [];
  let maxIdx = 0;
  let temp = 0;
  let n = arr.length;

  for (let i = 0; i < n-1; i++) {
    maxIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[maxIdx]) {
        maxIdx = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[maxIdx];
    arr[maxIdx] = temp;
  }

  for (i = 0; i < arr.length; i++) {
    sortedArr.push(arr[i]);
  }

  return sortedArr;
}

function maxDiff(arr) {
  let newArr = [];
  newArr = selectionSort(arr);

  return (newArr[newArr.length - 1] - newArr[0]);
}

console.log(maxDiff([1,2,3,8,9]));
console.log(maxDiff([1,2,3,18,9]));
console.log(maxDiff([13,2,3,8,9]));
