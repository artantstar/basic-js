import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;

  if (typeof str !== "string") str = String(str);
  if (typeof addition != "string") addition = String(addition);

  let resultArr = [];
  let resultStr = "";
  let additionArr = [];
  let additionStr = "";

  if (additionRepeatTimes > 0)
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition);
    }
  else additionArr.push(addition);
  additionStr = additionArr.join(additionSeparator);

  if (repeatTimes > 0)
    for (let i = 0; i < repeatTimes; i++) {
      resultArr.push(str + additionStr);
    }
  else resultArr.push(str + additionStr);

  resultStr = resultArr.join(separator);
  return resultStr;
}
