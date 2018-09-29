// Write a JavaScript program to check if a given matrix is an identity matrix. 
//
function identityMatrix(matrix) {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((i === j && matrix[i][j] !== 1) || (i !== j && matrix[i][j] !== 0)) {
        return false;
      }
    }
  }

  return true;
}

console.log(identityMatrix([[1,0,0],[0,1,0],[0,0,1]]));
console.log(identityMatrix([[1,0,1],[0,1,0],[0,0,1]]));
console.log(identityMatrix([[1,0,1],[0,0,0],[0,0,1]]));
