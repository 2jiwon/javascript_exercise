// Write a JavaScript program to find the kth greatest element of a given array of integers  
//
function selectionSort(arr) {
  let maxIdx;
  let temp = 0;
  let sortedArr = [];
  let n = arr.length;
  

  for (let i = 0; i < n -1; i++) {
    maxIdx = i;
    temp = arr[i];

    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }
      arr[i] = arr[maxIdx];
      arr[maxIdx] = temp;
  }

  for (i = 0; i < n; i++) {
    sortedArr.push(arr[i]);
  }

  return sortedArr;
}

function kthGreatest(arr, k) {
  let newArr = selectionSort(arr);
  
  return newArr[k - 1];
}

console.log(kthGreatest([1,2,3,4,5], 3));
console.log(kthGreatest([-10,-25,-47,-36,0], 1));
