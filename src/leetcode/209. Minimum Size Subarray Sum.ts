// https://leetcode.com/problems/minimum-size-subarray-sum/description/
// function minSubArrayLen(target: number, nums: number[]): number {return 0;}

// I. Brute force

// 1. reverse sort
// 2. sum until threshold

function minSubArrayLen(target: number, nums: number[]): number {
  const arr = nums.sort().reverse();

  let tmp = 0;
  let res = 0;

  for (let index = 0; index < arr.length + 1; index++) {
    const value = arr[index];

    if (tmp < target) {
      tmp += value;
    } else {
      res = index;
      break;
    }
  }

  return res;
}

console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));

// II. Sliding window with unknown window size
