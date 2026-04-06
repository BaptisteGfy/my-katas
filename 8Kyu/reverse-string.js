// Write a reverseString function
// that takes a string and returns this string upside down.

const reverseString = (word) => {
  return word.split('').reverse().join('');
};

console.log(reverseString('hello'));
console.log(reverseString('world'));
console.log(reverseString(' a'));
console.log(reverseString(''));

describe('reverse string', () => {
  it('should return "olleh" for hello', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  it('should return "dlroW" for World', () => {
    expect(reverseString('World')).toBe('dlroW');
  });
  it('should return "a " for " a"', () => {
    expect(reverseString(' a')).toBe('a ');
  });
  it('should return "" for ""', () => {
    expect(reverseString('')).toBe('');
  });
});

// reverseString("Hello")   → "olleH"
// reverseString("World")   → "dlroW"
// reverseString("")        → ""

// Réfléchis à tes cas de test avant de coder :

// Une chaîne normale
// Une chaîne avec des espaces
// Une chaîne vide
// Un seul caractère
