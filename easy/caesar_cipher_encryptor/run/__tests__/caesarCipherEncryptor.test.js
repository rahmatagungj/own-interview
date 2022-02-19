const { caesarCipherEncryptor } = require('../easy/caesar_cipher_encryptor/caesarCipherEncryptor')

describe('Caesar Cipher Encryptor', () => {
  it("caesarCipherEncryptor Function should be exist", () => {
    expect(caesarCipherEncryptor()).toExist()
  })

  it("caesarCipherEncryptor should be not throwing an error", () => {
    expect(caesarCipherEncryptor()).not().toThrowError()
  })

  it("caesarCipherEncryptor should be return a string", () => {
    let xyz = caesarCipherEncryptor("xyz", 2)
    expect(xyz).toBeType("string")
  })

  it("Test Case #1", () => {
    let xyz = caesarCipherEncryptor("xyz", 2);
    expect(xyz).toBe("zab")
  })

  it("Test Case #2", () => {
    let xyz = caesarCipherEncryptor("xyz", 3)
    expect(xyz).toBe("abc")
  })

  it("Test Case #3", () => {
    expect(caesarCipherEncryptor("xyz", 0)).toBe("xyz")
  })

  it("Test Case #4", () => {
    expect(caesarCipherEncryptor("xyz", 26)).toBe("xyz")
  })

  it("Test Case #5", () => {
    expect(caesarCipherEncryptor("xyz", -1)).toBe("wxy")
  })

})