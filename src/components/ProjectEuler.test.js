import {
  fiboEvenSum,
  largestPrimeFactor,
  multiplesOf3and5,
  palindromeChecker,
  rot13,
  sumSquareDifference,
} from './ProjectEuler';

describe('palindrome checker unit tests', () => {
  it('returns true when input is a palindrome', () => {
    expect(palindromeChecker('racecar')).toBe(true);
  });

  it('returns true when input is a palindrome', () => {
    expect(palindromeChecker('civic')).toBeTruthy();
  });

  it('returns false when input is not a palindrome', () => {
    expect(palindromeChecker('Kartul')).toBe(false);
  });

  it('returns false when input is not a palindrome', () => {
    expect(palindromeChecker('popper')).toBeFalsy();
  });
});

describe('rot13 (caesars cipher) unit tests', () => {
  it('returns correct cipher1', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });

  it('returns correct cipher2', () => {
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
  });

  it('returns correct cipher3', () => {
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
  });

  it('returns correct cipher4', () => {
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe(
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
    );
  });
});

describe('multiple of 3 and 5 unit tests', () => {
  it('should return a number', () => {
    const result = multiplesOf3and5(2);
    expect(typeof result).toBe('number');
  });

  it('number 49 should return a sum of 543', () => {
    expect(multiplesOf3and5(49)).toBe(543);
  });

  it('number 1000 should return a sum of 233168', () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
  });

  it('number 8456 should return a sum of 16687353', () => {
    expect(multiplesOf3and5(8456)).toBe(16687353);
  });

  it('number 19564 should return a sum of 89301183', () => {
    expect(multiplesOf3and5(19564)).toBe(89301183);
  });

  it('number 2 should return a sum of 0', () => {
    expect(multiplesOf3and5(2)).toBe(0);
  });
});

describe('fiboEvenSum unit tests', () => {
  it('should return a number', () => {
    const result = fiboEvenSum(10);
    expect(typeof result).toBe('number');
  });

  it('should return even number', () => {
    const result = fiboEvenSum(10);
    const isEven = result % 2 === 0;
    expect(isEven).toBeTruthy();
  });

  it('number 8 should return 10', () => {
    expect(fiboEvenSum(8)).toBe(10);
  });

  it('number 10 should return 10', () => {
    expect(fiboEvenSum(10)).toBe(10);
  });

  it('number 34 should return 44', () => {
    expect(fiboEvenSum(34)).toBe(44);
  });

  it('number 60 should return 44', () => {
    expect(fiboEvenSum(60)).toBe(44);
  });

  it('number 1000 should return 798', () => {
    expect(fiboEvenSum(1000)).toBe(798);
  });
});

describe('largestPrimeFactor unit tests', () => {
  it('should return a number', () => {
    const result = largestPrimeFactor(2);
    expect(typeof result).toBe('number');
  });

  it('2 should return 2', () => {
    expect(largestPrimeFactor(2)).toBe(2);
  });

  it('3 should return 3', () => {
    expect(largestPrimeFactor(3)).toBe(3);
  });

  it('5 should return 5', () => {
    expect(largestPrimeFactor(5)).toBe(5);
  });

  it('13195 should return 29', () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });

  it('600851475143 should return 6857', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
});

describe('sumSquareDifference unit tests', () => {
  it('should return a number', () => {
    const result = sumSquareDifference(100);
    expect(typeof result).toBe('number');
  });

  it('10 should return 2640', () => {
    expect(sumSquareDifference(10)).toBe(2640);
  });
});
