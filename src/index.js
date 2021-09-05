module.exports = function solveSudoku(matrix) {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {       
        for (var numb = 1; numb < 10; numb++) {
          if (validNumb(matrix, row, col, numb)) {
            matrix[row][col] = numb;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function section(row, col, x) {
  return {
    r: Math.floor(row / 3) * 3 + Math.floor(x / 3),
    c: Math.floor(col / 3) * 3 + x % 3
  };
}

function validNumb(matrix, row, col, numb) {
  for (var x = 0; x < 9; x++) {  
    var pos = section(row, col, x);  
    if (matrix[row][x] == numb || matrix[x][col] == numb || matrix[pos.r][pos.c] == numb) {
      return false;
    }
  }
  return true;
}
