/* global describe, it */

'use strict'

require('should')
const encode = require('..')

describe('encode-58', function () {
  it('normal', function () {
    encode(9).should.be.equal('a')
  })

  it('emoji', function () {
    encode.emoji(9).should.be.equal('🔆')
  })
})
