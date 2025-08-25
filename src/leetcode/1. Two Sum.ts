// https://leetcode.com/problems/two-sum/description/

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

console.log(twoSum([2, 7, 11, 15], 9));
