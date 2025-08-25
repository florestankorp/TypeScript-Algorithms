// https://leetcode.com/problems/sqrtx

function mySqrt(input: number): number {
  // initialize two pointers
  let left = 0;
  let right = input;

  let result = 0;

  while (left <= right) {
    // define current problem space:
    // we know that 'n' in n ** 2 == input cannot be greater than input / 2
    const midway = Math.round(left + (right - left) / 2);

    if (midway ** 2 > input) {
      right = midway - 1;
    } else if (midway ** 2 < input) {
      left = midway + 1;
      result = midway;
    } else {
      // if midway ** 2 == input we have found the square root
      return midway;
    }
  }

  return result;
}

mySqrt(8);
