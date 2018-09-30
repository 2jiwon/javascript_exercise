// Write a JavaScript program to find the longest string from a given array.
//
function findLongest(arr) {
  let l = arr.length;
  let longest = arr[0];
  let lg = arr[0].length;

  for (let i = 1; i < l; i++) {
    if (lg < arr[i].length) {
      lg = arr[i].length;
      longest = arr[i];
    }
  }

  return longest;
}

console.log(findLongest(['abcde','a','abcd']));
console.log(findLongest(['abc','a','abcd']));
console.log(findLongest(['ab','abcde','abd']));
console.log(findLongest(['ab','bc','bd']));

