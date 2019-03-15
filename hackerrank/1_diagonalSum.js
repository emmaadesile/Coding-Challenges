/* Diagonal Sum of a Square Matrix

1. Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal: 1 + 5 + 9 = 15. The right to left diagonal: 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

Function description

Complete the diagonalDifference function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, n, the number of rows and columns in the matrix arr. 
Each of the next  lines describes a row, arr[i], and consists of  space-separated integers arr[i][j].

Constraints
-100 <= arr[i][j] <= 100

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10

Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15
*/

function diagonalDifference(arr) {
  const rowsAndColumnsCount = arr[0];
  const firstDiagonalStep = rowsAndColumnsCount + 1;
  const secondDiagonalStep = rowsAndColumnsCount - 1;

  const matrix = arr.slice(1);
  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    if ((i === firstDiagonalStep) || (i % firstDiagonalStep === 0)) {
      firstSum += matrix[i]
    }
  }

  for (let i = secondDiagonalStep; i < matrix.length - secondDiagonalStep; i++) {
    if ((i === secondDiagonalStep) || (i % secondDiagonalStep === 0)) {
      secondSum += matrix[i]
    }
  }
  return Math.abs(firstSum - secondSum);
}

const array = [3, 11, 2, 4, 4, 5, 6, 10, 8, -12];
console.log(diagonalDifference(array));

