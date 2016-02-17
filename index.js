'use strict'

const alphabet = require('./mime')
const alphabetEmoji = require('./emojis')

function encode (alphabet, base) {
  return function (num) {
    if (!/^\d+$/.test(num)) throw new Error('Value passed is not an integer.')
    if (typeof num !== 'number') num = parseInt(num)

    var str = ''

    while (num >= base) {
      var mod = num % base
      str = alphabet[mod] + str
      num = (num - mod) / base
    }

    return alphabet[num] + str
  }
}

module.exports = encode(alphabet, alphabet.length)
module.exports.emojis = encode(alphabetEmoji, alphabetEmoji.length)
