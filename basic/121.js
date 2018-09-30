// Write a JavaScript program to check if a given matrix is lower triangular or not. 
//
// https://ko.wikipedia.org/wiki/삼각행렬
//
function lowerTriagnlar(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i < j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(lowerTriagnlar([[1,0,0],[2,0,0],[0,3,3]]));
console.log(lowerTriagnlar([[1,0,1],[2,0,0],[0,3,3]]));
