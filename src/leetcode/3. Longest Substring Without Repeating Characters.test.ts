/**
A substring is a contiguous non-empty sequence of characters within a string.
- longest substring COULD mean we want to search greedy, so from the end inwards (?)
- no duplicate characters -> chars have to be unique

Questions:
- what do i return when s.length is zero?

brainstorm:
- deduplicate the string?
- sliding window


L=1
S=0
E=0
R = ["p"] <- might counter that resets?

L=2
S=0
E=1
R = ["p", "w"]

L=3
S=0
E=2
R = ["p", "w", "w"]

L=3
S=0
E=2
R = []

// if (s.length - E) < L I have found the longest possible answer
 */

import { expect, test } from 'vitest';

// pwwkew
// function lengthOfLongestSubstring(s: string): number {
//   let len = 0;

//   // Window
//   let L = 0; // [
//   let R = 0; // ]

//   // {p: 1, w: 1 }
//   let counter = new Map<string, number>();

//   while (R < s.length) {
//     // increment len
//     // increment counter for the given letters in the window IF it doesn't exist and shift right edge of window

//     if (!counter.has(s[R])) {
//       counter.set(s[R], 1);
//       len++;
//       R++;
//     } else {
//       // otherwise reset counter, move window
//       counter = new Map<string, number>();
//       len = Math.max(len, R - L + 1);
//       L = R;
//     }
//   }

//   return len;
// }

// function lengthOfLongestSubstring(s: string): number {
//   if (s.length === 0) return 0;

//   let len = 0;
//   let start = 0;

//   const counter = new Map<string, number>();

//   for (let end = 0; end < s.length; end++) {
//     const curr = s[end];

//     // If character exists in our current window, move start pointer
//     // to position after the last occurrence of this character
//     if (counter.has(curr)) {
//       start = counter.get(curr)! + 1;
//     }

//     // Update the position of current character
//     counter.set(curr, end);

//     // Update max length if current window is larger
//     len = Math.max(len, end - start + 1);
//   }

//   return len;
// }

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let max = 0;
  let start = 0;

  let charMap = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const element = s[end];

    if (charMap.has(element)) {
      start = charMap.get(element)! + 1;
    }

    charMap.set(element, end);

    const window = end - start + 1;
    max = Math.max(max, window);
  }

  return max;
}

test.each([
  { w1: 'abcabcbb', expected: 3 },
  { w1: 'bbbbb', expected: 1 },
  { w1: 'pwwkew', expected: 3 },
  { w1: 'abba', expected: 2 },
])('mergeAlternately($w1, $w2) -> $expected', ({ w1, expected }) => {
  expect(lengthOfLongestSubstring(w1)).toBe(expected);
});
