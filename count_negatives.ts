/**
 * Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
 * Return the number of negative numbers in grid.
 * 
 * Example 1:
 * Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * Output: 8
 * Explanation: There are 8 negatives number in the matrix.
 * 
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 100
 * -100 <= grid[i][j] <= 100
 */

 /**
  * @param grid: m * n matrix of numbers, sorted non-increasing
  * @returns: number of non negative numbers in input grid
  */
const countNegatives = (grid: number[][]): number => {

    var count = 0;

    grid.forEach(block => {
        block.forEach(element => {
            if (element < 0) {
                count++;
            }
        });
    });

    return count;
};
