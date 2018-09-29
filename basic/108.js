// Write a JavaScript program to create the dot products of two given 3D vectors.
//
// 벡터의 내적 https://m.blog.naver.com/mindo1103/90103350914
//
function dotProducts(arr1, arr2) {
  let result = 0;

  for (let i = 0; i < 3; i++) {
    result += (arr1[i] * arr2[i]);
  }

  return result;
}

console.log(dotProducts([1,2,3], [1,2,3]));
console.log(dotProducts([2,4,6], [2,4,6]));
console.log(dotProducts([1,1,1], [0,1,-1]));
