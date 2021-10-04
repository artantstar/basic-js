import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n.toString();
  let arr = [];

  str.split('').forEach((elem) => {
    arr.push(+str.replace(elem, ''));
  });

  return arr.sort((a, b) => b - a)[0];
}
