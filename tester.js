/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {array} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {array} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
  return arr.slice(-n).concat(arr.slice(0, -n));
}

console.log(shiftArray([1, 2, 3, 4, 5], 2));
console.log(shiftArray(['a', 'b', 'c', 'd'], -1));
console.log(shiftArray([10, 20, 30, 40, 50], -3));
