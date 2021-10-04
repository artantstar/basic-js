import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const newMatrix = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === true && k === 0) {
        newMatrix[i][k + 1]++;
      } else if (matrix[i][k] === true && k === matrix[i].length - 1) {
        newMatrix[i][k - 1]++;
      } else if (matrix[i][k] === true) {
        newMatrix[i][k + 1]++;
        newMatrix[i][k - 1]++;
      }

      if (matrix[i][k] === true && i === 0) {
        newMatrix[i + 1][k]++;
      } else if (matrix[i][k] === true && i === matrix.length - 1) {
        newMatrix[i - 1][k]++;
      } else if (matrix[i][k] === true) {
        newMatrix[i + 1][k]++;
        newMatrix[i - 1][k]++;
      }

      if (matrix[i][k] === true && i === 0 && k === 0) {
        newMatrix[i + 1][k + 1]++;
      } else if (
        matrix[i][k] === true && i === 0 && k === matrix[i].length - 1) {
        newMatrix[i + 1][k - 1]++;
      } else if (
        matrix[i][k] === true && i === matrix.length - 1 && k === matrix[i].length - 1) {
        newMatrix[i - 1][k - 1]++;
      } else if (matrix[i][k] === true && i === matrix.length - 1 && k === 0) {
        newMatrix[i - 1][k + 1]++;
      } else if (matrix[i][k] === true && k === 0) {
        newMatrix[i - 1][k + 1]++;
        newMatrix[i + 1][k + 1]++;
      } else if (matrix[i][k] === true && k === matrix[i].length - 1) {
        newMatrix[i - 1][k - 1]++;
        newMatrix[i + 1][k - 1]++;
      } else if (matrix[i][k] === true && i === 0) {
        newMatrix[i + 1][k - 1]++;
        newMatrix[i + 1][k + 1]++;
      } else if (matrix[i][k] === true && i === matrix.length - 1) {
        newMatrix[i - 1][k - 1]++;
        newMatrix[i - 1][k + 1]++;
      } else if (matrix[i][k] === true) {
        newMatrix[i - 1][k - 1]++;
        newMatrix[i - 1][k + 1]++;
        newMatrix[i + 1][k + 1]++;
        newMatrix[i + 1][k - 1]++;
      }
    }
  }
  return newMatrix;
}
