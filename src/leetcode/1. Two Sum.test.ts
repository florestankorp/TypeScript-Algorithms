import { expect, test } from 'vitest';

/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

// function twoSum(nums: number[], target: number): number[] {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     let p2 = p1 + 1;

//     while (p2 < nums.length) {
//       if (nums[p1] + nums[p2] === target) {
//         return [p1, p2];
//       }

//       p2++;
//     }
//   }

//   return [];
// }

function twoSum(numbers: number[], target: number): number[] {
  // Map of {number: index}
  const counter = new Map<number, number>();

  for (let index = 0; index < numbers.length; index++) {
    const num = numbers[index];
    // if target - num = x then x + num = target
    const diff = target - num;

    // check if remainingValue exists in counter
    if (counter.has(diff)) {
      return [index, counter.get(diff)!];
    }

    counter.set(num, index);
  }

  return [];
}

test.each([
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
])(
  'mergeAlternately($nums, $target) -> $expected',
  ({ nums, target, expected }) => {
    expect(twoSum(nums, target).sort()).toEqual(expected);
  },
);
