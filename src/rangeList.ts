import { searchLeft, searchRight } from './bisectionSearch';

/**
 *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
export class RangeList {
  // rangeList contains numbers of sorted ranges with start and end value
  private rangeList: number[] = [];

  /**
   * only handle valid range
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  checkIfValidRange(range: number[]) {
    if (!Array.isArray(range)) {
      return false;
    }

    if (range.length !== 2) {
      return false;
    }
    const isAllInteger = range.every((num) => Number.isInteger(num));
    return isAllInteger && range[0] <= range[1];
  }

  /**
   * Adds a range to the list
   *
   * This function firstly get the leftmost insertion index of the left value
   * and the rightmost insertion index of the right value
   * * and then we need to check whether the index is even value
   * * if it is, it means that it is currently out of the range being traversed
   * then we can splice the start and end index to override rangeList
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range: number[]) {
    if (!this.checkIfValidRange(range)) {
      return;
    }
    let [left, right] = range;
    // get leftmost insertion index of the left value
    let start = searchLeft(this.rangeList, left) + 1;
    // get the rightmost insertion index of the right value
    let end = searchRight(this.rangeList, right) + 1;

    let subRange = [];
    if (start % 2 === 0) {
      subRange.push(left);
    }
    if (end % 2 === 0) {
      subRange.push(right);
    }

    const deleteCount = end - start;
    this.rangeList.splice(start, deleteCount, ...subRange);
  }

  /**
   * Removes a range from the list
   *
   * first get the leftmost insertion index of the left value and rightmost insertion index of the right value
   *
   * * check if index is odd.
   * * if odd, it means that it currently inside the range being traversed.
   * * in this case we need to include the index into the range list.
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range: number[]) {
    if (!this.checkIfValidRange(range)) {
      return;
    }

    const [left, right] = range;

    let start = searchLeft(this.rangeList, left) + 1;
    let end = searchRight(this.rangeList, right) + 1;

    let subRange = [];
    if (start % 2 === 1) {
      subRange.push(left);
    }
    if (end % 2 === 1) {
      subRange.push(right);
    }

    const deleteCount = end - start;
    this.rangeList.splice(start, deleteCount, ...subRange);
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    if (!this.rangeList.length) {
      console.log(
        'current rangeList do not have any range, feel free to add one!',
      );
      return null;
    }
    let str = this.rangeList.reduce((str, range, index) => {
      if (index % 2 === 0) {
        let left = range;
        return `${str} [${left},`;
      } else {
        let right = range;
        return `${str} ${right})`;
      }
    }, '');

    // delete the first blank string
    str = str.slice(1);
    console.log(`should display: ${str}`);
    return str;
  }
}
