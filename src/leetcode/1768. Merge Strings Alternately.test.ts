// https://leetcode.com/problems/merge-strings-alternately/

// Using dynamic import for Vitest
import { expect, test } from 'vitest';

/**
You are given two strings word1 and word2. Merge the strings by adding letters 
in alternating order, starting with word1. If a string is longer than the other,
append the additional letters onto the end of the merged string.

Return the merged string.
 */

// function mergeAlternately(word1: string, word2: string): string {
//     let res = [];

//     for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
//         res.push(word1[i]);
//         res.push(word2[i]);
//     }

//     return res.join('') + longerWord(word1, word2)
//         .split('')
//         .slice(shorterWord(word1, word2).length)
//         .join('');

// };

// function shorterWord(w1: string, w2: string): string {
//     return w1.length > w2.length ? w2 : w1;
// }

// function longerWord(w1: string, w2: string): string {
//     return w1.length > w2.length ? w1 : w2;
// }

function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let j = 0;

  const w1Length = word1.length;
  const w2Length = word2.length;

  const res: string[] = [];

  for (let index = 0; index < Math.min(w1Length, w2Length); index++) {
    res.push(word1[index]);
    res.push(word2[index]);

    i++;
    j++;
  }

  res.push(word1.slice(i));
  res.push(word2.slice(j));

  return res.join('');
}

test.each([
  { w1: 'abc', w2: 'pqr', expected: 'apbqcr' },
  { w1: 'ab', w2: 'pqrs', expected: 'apbqrs' },
  { w1: 'abcd', w2: 'pq', expected: 'apbqcd' },
])('mergeAlternately($w1, $w2) -> $expected', ({ w1, w2, expected }) => {
  expect(mergeAlternately(w1, w2)).toBe(expected);
});
