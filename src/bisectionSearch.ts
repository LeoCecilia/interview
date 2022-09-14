/**
 * this module uses besection algorithmn to support searching on the sorted array
 */

/**
 * locate the insection point to the left of any existing entries
 * @param arr number[]
 * @param value number
 * @returns the maximum value that **less than** the given value in the given array parameter
 */
export function searchLeft(arr: number[], value: number) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (high < 0) {
    return -1;
  }
  return high;
}

/**
 * locate the insection point to the right of any existing entries
 * @param arr
 * @param value
 * @returns the maximum value that **less than or equal to** the given value in the given array parameter
 */
export function searchRight(arr: number[], value: number) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (high < 0) {
    return -1;
  }
  return high;
}
