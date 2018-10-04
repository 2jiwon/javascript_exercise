// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.  
//
function sortByStringLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(sortByStringLength(['','a','b','bb','aa','xyz','abc','zzz']));
