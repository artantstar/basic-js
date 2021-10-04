import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = str.split('');
  let result = '';
  let count;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] === arr[i + 1]) {
      count = 1;
    } else if (arr[i] === arr[i - 1] && arr[i] !== arr[i + 1]) {
      count++;
      result += count + arr[i];
    } else if (arr[i] === arr[i - 1] && arr[i] === arr[i + 1]) {
      count++;
    } else if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      result += arr[i];
    }
  }
  return result;
}
