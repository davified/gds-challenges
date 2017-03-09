/* global it describe */
var expect = require('chai').expect
var assert = require('assert')
var NumberTranslator = require('../app/level-2')
var numberTranslator = new NumberTranslator()

// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

describe('Translating single-digit integers to English equivalent', function () {
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
})

describe('Translating "category-1" double-digit integers to English equivalent', function () {
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
