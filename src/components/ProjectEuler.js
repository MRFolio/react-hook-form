export const palindromeChecker = (str) => {
  const string = str.toLowerCase();
  return string === string.split('').reverse().join('');
};

console.log(palindromeChecker('racecar'));

export const rot13 = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return str
    .split('')
    .map((char) => {
      const position = alphabet.indexOf(char);
      const ciphered = position === -1 ? char : alphabet[(position + 13) % 26];

      return ciphered;
    })
    .join('');
};

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('SERR CVMMN!'));

// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number

export const multiplesOf3and5 = (number) => {
  let sum = 0;
  let i = 3;

  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i += 1;
  }

  return sum;
};

console.log(multiplesOf3and5(1000));
