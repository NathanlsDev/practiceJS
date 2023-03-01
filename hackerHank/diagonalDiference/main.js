/*
  calculate the absolute difference between the sums of its diagonals.
*/

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  const length = arr.length - 1;
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][length - i];
  }
  total = leftDiagonal - rightDiagonal;
  return Math.abs(total);
}

diagonalDifference(matrix);