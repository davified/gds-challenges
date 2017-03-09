/* global it describe */
var expect = require('chai').expect
var assert = require('assert')
var StringCollapser = require('../app/level-1')
var stringCollapser = new StringCollapser()

// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

describe('Collpasing single strings', function () {
  it('should return Oo', function () {
    var expected = 'Oo'
    var actual = stringCollapser.collapse('Ooo')
    expect(expected).to.be.eql(actual)
  })
})
