export const palindromeChecker = (str) => {
  const string = str.toLowerCase();
  return string === string.split('').reverse().join('');
};

console.log(palindromeChecker('racecar'));
console.log(palindromeChecker('tenet'));

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

// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

export const fiboEvenSum = (n) => {
  let a = 1;
  let b = 2;
  let sum = b;

  while (b <= n) {
    let temporary = a;
    a = b;
    b = temporary + b;

    if (b % 2 === 0) {
      sum += b;
    }
  }

  return sum;
};

console.log(fiboEvenSum(8));

// (function IIFE() {

// })()

// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

export const largestPrimeFactor = (number) => {
  let prime = 2;
  let max = 1;
  while (prime <= number) {
    if (number % prime === 0) {
      max = prime;
      number = number / prime;
    } else {
      prime += 1;
    }
  }
  return max;
};

console.log(largestPrimeFactor(3));

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

export const findLongestWordLength = (str) => {
  const splitArray = str.split(' ');
  let longestWordLength = 0;

  for (const word of splitArray) {
    const wordLength = word.length;
    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
    }
  }
  return longestWordLength;
};

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// FizzBuzz javascript
// Write a program that prints the numbers from 1 to 100 . ... But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz" . For numbers which are multiples of both three and five, print "FizzBuzz"
function fizzBuzz() {
  let num = 1;

  while (num < 100) {
    if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else if (num % 5 === 0 && num & (3 === 0)) {
      console.log('FizzBuzz');
    } else {
      console.log(num);
    }
    num += 1;
  }
}

// Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 ??? 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

export const sumSquareDifference = (n) => {
  const sumOfN = (n * (n + 1)) / 2;
  const sumOfNSquare = (n * (n + 1) * (2 * n + 1)) / 6;

  return sumOfN ** 2 - sumOfNSquare;
};

sumSquareDifference(100);
