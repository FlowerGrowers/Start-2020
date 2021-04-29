/**
 *
 * @param {number} n
 * @returns {number}
 */
function fn(n: number): number {
  if (n == 1 || n == 0) {
    return n;
  }
  return fn(n - 1) + fn(n - 2);
}

let res = fn(5);
console.log('res', res);

// 0 1 1 2 3 5 8
