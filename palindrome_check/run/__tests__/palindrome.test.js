const { isPalindrome } = require('../palindrome_check/isPalindrome')

describe('Palindrome Check', () => {
  it('should be called', () => {
    expect(isPalindrome('aba')).toExist();
  })

  it('should be returned boolean type', () => {
    expect(isPalindrome('aba')).toBeType('boolean');
  })

  it('should be not throwing an error', () => {
    expect(() => {
      isPalindrome('aba')
    }).not().toThrow();
  })

  it('"aba" should be true palindrome', () => {
    expect(isPalindrome('aba')).toBe(true)
    expect(isPalindrome('aba')).toBeTruthy()
  })

  it('"ab" should be false palindrome', () => {
    expect(isPalindrome('ab')).toBe(false)
    expect(isPalindrome('ab')).toBeFalsy()
  })

  it('checking more palindrome word', () => {
    expect(isPalindrome('madam')).toBe(true)
    expect(isPalindrome('madam')).toBeTruthy()

    expect(isPalindrome('madan')).toBe(false)
    expect(isPalindrome('madan')).toBeFalsy()
  })
})