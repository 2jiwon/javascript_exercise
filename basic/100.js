// Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.
//
function selectionSort(arr) {
  let sortedArr = [];
  let maxIdx = 0;
  let temp;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
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

  for (i = 0; i < n; i++) {
    sortedArr.push(arr[i]);
  }

  return sortedArr;
}

function checkElement(arr1, arr2) {
  let newArr1 = selectionSort(arr1);
  let newArr2 = selectionSort(arr2);

  for (let i = 0; i < newArr1.length; i++) {
    if (newArr2.includes(newArr1[i])) {
      return true;
    }
  }

  return false;
}

console.log(checkElement([1,2,3], [3,4,5]));
console.log(checkElement([1,2,3], [5,6,7]));
console.log(checkElement([4,2,3], [9,4,7]));
console.log(checkElement([1,4,9,8], [2,7,10,8]));
