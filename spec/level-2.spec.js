/* global it describe */
var expect = require('chai').expect
var assert = require('assert')
var NumberTranslator = require('../app/level-2')
var numberTranslator = new NumberTranslator()

// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

describe('Translating "category-1" double-digit integers to English equivalent', function () {
  it('should return One', function () {
    var expected = 'One'
    var actual = numberTranslator.translateToEnglish(1)
    expect(expected).to.be.eql(actual)
  })

  it('should return Two', function () {
    var expected = 'Two'
    var actual = numberTranslator.translateToEnglish(2)
    expect(expected).to.be.eql(actual)
  })

  it('should return Eight', function () {
    var expected = 'Eight'
    var actual = numberTranslator.translateToEnglish(8)
    expect(expected).to.be.eql(actual)
  })

  it('should return Nine', function () {
    var expected = 'Nine'
    var actual = numberTranslator.translateToEnglish(9)
    expect(expected).to.be.eql(actual)
  })
  it('should return Ten', function () {
    var expected = 'Ten'
    var actual = numberTranslator.translateToEnglish(10)
    expect(expected).to.be.eql(actual)
  })

  it('should return Twelve', function () {
    var expected = 'Twelve'
    var actual = numberTranslator.translateToEnglish(12)
    expect(expected).to.be.eql(actual)
  })
})

describe('Translating "category-2" double-digit integers to English equivalent', function () {
  it('should return Thirteen', function () {
    var expected = 'Thirteen'
    var actual = numberTranslator.translateToEnglish(13)
    expect(expected).to.be.eql(actual)
  })

  it('should return Fourteen', function () {
    var expected = 'Fourteen'
    var actual = numberTranslator.translateToEnglish(14)
    expect(expected).to.be.eql(actual)
  })

  it('should return Fifteen', function () {
    var expected = 'Fifteen'
    var actual = numberTranslator.translateToEnglish(15)
    expect(expected).to.be.eql(actual)
  })
})

describe('Translating "category-3" double-digit integers to English equivalent', function () {
  it('should return Sixteen', function () {
    var expected = 'Sixteen'
    var actual = numberTranslator.translateToEnglish(16)
    expect(expected).to.be.eql(actual)
  })

  it('should return Nineteen', function () {
    var expected = 'Nineteen'
    var actual = numberTranslator.translateToEnglish(19)
    expect(expected).to.be.eql(actual)
  })
})

describe('Translating "category-4" double-digit integers to English equivalent', function () {
  it('should return Twenty', function () {
    var expected = 'Twenty'
    var actual = numberTranslator.translateToEnglish(20)
    expect(expected).to.be.eql(actual)
  })

  it('should return Forty', function () {
    var expected = 'Forty'
    var actual = numberTranslator.translateToEnglish(40)
    expect(expected).to.be.eql(actual)
  })

  it('should return Twenty one', function () {
    var expected = 'Twenty one'
    var actual = numberTranslator.translateToEnglish(21)
    expect(expected).to.be.eql(actual)
  })

  it('should return Fifty one', function () {
    var expected = 'Fifty one'
    var actual = numberTranslator.translateToEnglish(51)
    expect(expected).to.be.eql(actual)
  })
})
