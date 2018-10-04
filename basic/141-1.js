// Write a JavaScript program to find the number of elements which presents in both of the given arrays.
//
function findElemnets(arr1, arr2) {
  // suggested by one of w3resource's replies.
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  return [...set1].filter(e => set2.has(e)).length;
}

console.log(findElemnets([1,2,3,4], [1,2,3,4]));
console.log(findElemnets([1,2,3,4], [1,2,3,5]));
console.log(findElemnets([1,2,3,4], [11,22,33,44]));
