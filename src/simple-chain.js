import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.chainArr.push("( " + value + " )");
    return this;
  },

  removeLink(position) {
    if (position > 0 && position < this.getLength()) {
      this.chainArr.splice(position - 1, 1);
      return this;
    } else {
      this.chainArr = [];
      throw Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let chainStr = this.chainArr.join("~~");
    this.chainArr = [];
    return chainStr;
  }
};
