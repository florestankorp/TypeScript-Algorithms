/**
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower 
and upper cases, more than once.

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.


 */

import { expect, test } from 'vitest';

function reverseVowels(s: string): string {
  const splitString = s.split('');

  // two-pointers moving inward from either end
  // move each pointer until it finds a vowel
  // swap place with the other pointer
  // keep going until pointers meet (p2>p1)
  let p1 = 0;
  let p2 = splitString.length - 1;

  while (p2 > p1) {
    if (isVowel(splitString[p1]) && isVowel(splitString[p2])) {
      [splitString[p1], splitString[p2]] = [splitString[p2], splitString[p1]];
      p1++;
      p2--;
    }

    if (!isVowel(splitString[p1])) {
      p1++;
    }

    if (!isVowel(splitString[p2])) {
      p2--;
    }
  }

  return splitString.join('');
}

function isVowel(s: string): boolean {
  const lowerVowels = ['a', 'e', 'i', 'o', 'u'];
  const upperVowels = ['A', 'E', 'I', 'O', 'U'];

  return lowerVowels.includes(s) || upperVowels.includes(s);
}

test.each([
  { s: 'IceCreAm', expected: 'AceCreIm' },
  { s: 'leetcode', expected: 'leotcede' },
])('reverseVowels($s) -> $expected', ({ s, expected }) => {
  expect(reverseVowels(s)).toBe(expected);
});
