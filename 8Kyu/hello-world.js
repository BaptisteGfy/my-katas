// Make a simple function called greet
// that returns the most-famous "hello world!".

/* 
// first reflextion
function hello() {
  const hello = "Hello, World!"
  return hello
 }
*/

// refactor
const hello = () => 'Hello, World!';

////////////////
// Jest Tests //
////////////////

describe('hello', () => {
  it('should be a function', () => {
    expect(typeof hello).toBe('function');
  });

  it('should return "Hello, World!"', () => {
    expect(hello()).toBe('Hello, World!');
  });
});
