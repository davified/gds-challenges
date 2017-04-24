/* global it describe */
var expect = require('chai').expect
var assert = require('assert')
var StringCollapser = require('../app/level-1')
var stringCollapser = new StringCollapser()

describe('Collpasing single strings', function () {
  it('should return Oo', function () {
    var expected = 'Oo'
    var actual = stringCollapser.collapse('Ooo')
    expect(expected).to.be.eql(actual)
  })

  it('should return Oo', function () {
    var expected = 'Aa'
    var actual = stringCollapser.collapse('Aaa')
    expect(expected).to.be.eql(actual)
  })

  it('should return Ooh my gawd!', function () {
    var expected = 'Ooh my gawd!'
    var actual = stringCollapser.collapse('Oooh my    gawwwd!!')
    expect(expected).to.be.eql(actual)
  })
})
