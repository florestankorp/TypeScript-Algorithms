/**
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Constraints:

    1 <= flowerbed.length <= 2 * 104
    flowerbed[i] is 0 or 1.
    There are no two adjacent flowers in flowerbed.
    0 <= n <= flowerbed.length
 */

import { expect, test } from 'vitest';

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const paddedFlowerbed = [0, ...flowerbed, 0];

  for (let i = 1; i < paddedFlowerbed.length - 1; i++) {
    const rightN = i + 1;
    const leftN = i - 1;

    if (
      paddedFlowerbed[leftN] === 0 &&
      paddedFlowerbed[i] === 0 &&
      paddedFlowerbed[rightN] === 0
    ) {
      paddedFlowerbed[i] = 1;
      n -= 1;
    }
  }

  return n <= 0;
}

test.each([
  { flowerbed: [1, 0, 0, 0, 1], n: 1, expected: true },
  { flowerbed: [1, 0, 0, 0, 1], n: 2, expected: false },
  { flowerbed: [1, 0, 0, 0, 0, 0, 1], n: 2, expected: true },
])(
  'canPlaceFlowers($flowerbed, $n) -> $expected',
  ({ flowerbed, n, expected }) => {
    expect(canPlaceFlowers(flowerbed, n)).toEqual(expected);
  },
);
