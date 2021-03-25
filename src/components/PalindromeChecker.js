export const palindromeChecker = (str) => {
  const string = str.toLowerCase();
  return string === string.split('').reverse().join('');
};

palindromeChecker('racecar');

export const rot13 = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return str
    .split('')
    .map((char) => {
      const position = alphabet.indexOf(char);
      const ciphered = position === -1 ? char : alphabet[(position + 13) % 26];
      console.log(ciphered);

      return ciphered;
    })
    .join('');
};

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('SERR CVMMN!'));
