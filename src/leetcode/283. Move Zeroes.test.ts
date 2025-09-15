/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Constraints:
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?
 
 */

import { expect, test } from 'vitest';

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    // if number is zero: quicksort!
    if (nums[r]) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
    }
  }
}

test.each([
  { nums: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
  { nums: [0], expected: [0] },
  { nums: [0, 0, 1], expected: [1, 0, 0] },
  { nums: [1, 2, 3], expected: [1, 2, 3] },
])('moveZeroes($nums) -> $expected', ({ nums, expected }) => {
  const ret = moveZeroes(nums);
  expect(ret).toBeUndefined(); // function returns void

  const actual = [...nums]; // function mutates in place
  expect(actual).toStrictEqual(expected);
});
