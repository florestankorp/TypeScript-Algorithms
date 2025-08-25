import { expect, test } from 'vitest';

// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  /*
    // Option 1. filter punctuation and spaces ":, "
    // Option 2. filter non-ASCII chars (syntax unknown, ask interviewer!)
    // Option 3. Pseudocode

        what we know about the shape of our input 's':
            - palindromes read the same forward and backward
            - that means the second half is identical to the first half REVERSED
            - it will only evert consist of printable ASCII chars
            - length will always be reasonable -> we don't need to handle exceptions for overflow :)
            - length will always be greater than or equal to 1
        
        QUESTION:
            - Q: can I assume that ":, " are the ONLY non-alphanumeric chars I will be encountering?
            - A: Yes
        
        ALGORITHM:
            Option 1: Split the array in half and check if both halves are identical
            Option 2: Two pointers
            - clean input and filter out non-alphanumeric chars, toLower (!)
            - create 'candidate' string 
            - init pointers (L=0, R=candidate.length)
            - loop over chars in 'candidate' string: 
                - while -> condition: stop when pointers intersect // double check what happens at the midway point?
                - check on each iteration: are the two letters identical to one another, if not return FALSE
                - move pointers (increase LEFT, decrease RIGHT)
            - return TRUE as "default"
    */

  const candidate = cleanup(s);

  let L = 0;
  let R = candidate.length - 1;

  while (L <= R) {
    if (candidate[L] !== candidate[R]) return false;
    L++;
    R--;
  }

  return true;
}

function cleanup(s: string): string {
  return s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}

test.each([
  { w1: 'A man, a plan, a canal: Panama', expected: true },
  { w1: 'race a car', expected: false },
  { w1: ' ', expected: true },
  { w1: 'a man a plan a canal panama', expected: true },
  { w1: 'A man, a plan, a canal Panama.', expected: true },
  { w1: ':,. ', expected: true },
  { w1: 'abcddcba', expected: true },
  { w1: 'abcdcba', expected: true },
])('isPalindrome($w1) -> $expected', ({ w1, expected }) => {
  expect(isPalindrome(w1)).toBe(expected);
});
