/**
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:
- 1 <= str1.length, str2.length <= 1000
- str1 and str2 consist of English uppercase letters.
*/

import { expect, test } from 'vitest';

function gcdOfStrings(str1: string, str2: string): string {
  let res = '';
  const str1Length = str1.length;
  const str2Length = str2.length;

  for (let l = Math.min(str1Length, str2Length); l > 0; l--) {
    if (str1Length % l === 0 && str2Length % l === 0) {
      const f1 = str1Length / l;
      const f2 = str2Length / l;

      const hasRepeatingPattern =
        str1.substring(0, l).repeat(f1) === str1 &&
        str1.substring(0, l).repeat(f2) === str2;

      if (hasRepeatingPattern) {
        res = str1.substring(0, l);
        break;
      }
    }
  }

  return res;
}

test.each([
  { w1: 'ABCABC', w2: 'ABC', expected: 'ABC' },
  { w1: 'ABABAB', w2: 'ABAB', expected: 'AB' },
  { w1: 'LEET', w2: 'CODE', expected: '' },
])('mergeAlternately($w1, $w2) -> $expected', ({ w1, w2, expected }) => {
  expect(gcdOfStrings(w1, w2)).toBe(expected);
});
