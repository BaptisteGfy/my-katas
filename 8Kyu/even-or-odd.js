// make a function evenOrOdd that takes an integer and returns
// "Even" if the number is even,
// "Odd" if it is odd.

// const evenOrOdd = (num) => {
//   if (num % 2 === 0) {
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// };

const evenOrOdd = (num) => {
  return num % 2 === 0 ? 'Even' : 'Odd';
};

////////////////
// Jest Tests //
////////////////

describe('evenOrOdd', () => {
  it('should return "Even" for 2', () => {
    expect(evenOrOdd(2)).toBe('Even');
  });
  it('should return "Odd" for 7', () => {
    expect(evenOrOdd(7)).toBe('Odd');
  });
  it('should return "Even" for 0', () => {
    expect(evenOrOdd(0)).toBe('Even');
  });
  it('should return "Odd" for -3', () => {
    expect(evenOrOdd(-3)).toBe('Odd');
  });
  it('should return "Even" for -4', () => {
    expect(evenOrOdd(-4)).toBe('Even');
  });
});
