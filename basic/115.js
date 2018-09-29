// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
// In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). 
//
function diagonalMatrix(matrix) {
  let l = matrix.length;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if ((i !== j) && (matrix[i][j] !== 0)) {
        return false;
      }
    }
  }
  return true;
}

console.log(diagonalMatrix([[1,0,0],[0,2,0],[0,0,3]]));
console.log(diagonalMatrix([[1,0,0],[0,2,3],[0,0,3]]));
