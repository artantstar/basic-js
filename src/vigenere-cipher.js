import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    let firstSimbol = 65
    let alphabetLength = 26;
    let result = [];

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) < 65 || message[i].charCodeAt(0) > 90) {
        result.push(message[i]);
        message = message.replace(message[i], '');
        i--;
      } else {
        let letterIdx = message.charCodeAt(i) - firstSimbol;
        let shift = key.charCodeAt(i) - firstSimbol;
        result.push(String.fromCharCode(firstSimbol + (letterIdx + shift) % alphabetLength));
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    let firstSimbol = 65
    let alphabetLength = 26;
    let result = [];

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) < 65 || message[i].charCodeAt(0) > 90) {
        result.push(message[i]);
        message = message.replace(message[i], '');
        i--;
      } else {
        let letterIdx = message.charCodeAt(i) - firstSimbol;
        let shift = key.charCodeAt(i) - firstSimbol;
        result.push(String.fromCharCode(firstSimbol + (letterIdx - shift + alphabetLength) % alphabetLength));
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }
}
