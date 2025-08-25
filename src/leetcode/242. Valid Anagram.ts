// function isAnagram(s: string, t: string): boolean {
//   // they should be the same length
//   if (s.length !== t.length) {
//     return false;
//   }

//   // takes up space!
//   // is slow!
//   const sArray = s.split('').sort();
//   const tArray = t.split('').sort();

//   for (let index = 0; index < s.length; index++) {
//     // after sorting each member should be identical
//     if (sArray[index] !== tArray[index]) {
//       return false;
//     }
//   }

//   return true;
// }

function isAnagram(s: string, t: string): boolean {
  // count occurrence of letters in 's' (1x pass)

  // they should be the same length
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Map();

  for (const char of s) {
    // count and increment
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    // we know that char has to exist in counter
    // we also know that if count of chars is zero, there is a discrepancy
    if (!counter.has(char) || counter.get(char) === 0) {
      return false;
    }

    counter.set(char, counter.get(char) - 1);
  }

  return true;
}

console.log(isAnagram('rat', 'tar'));
