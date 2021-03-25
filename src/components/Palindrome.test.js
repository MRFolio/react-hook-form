import { palindromeChecker, rot13 } from './PalindromeChecker';

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
