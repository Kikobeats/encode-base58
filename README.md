# encode-base58

![Last version](https://img.shields.io/github/tag/Kikobeats/encode-base58.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/encode-base58/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/encode-base58)
[![Dependency status](http://img.shields.io/david/Kikobeats/encode-base58.svg?style=flat-square)](https://david-dm.org/Kikobeats/encode-base58)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/encode-base58.svg?style=flat-square)](https://david-dm.org/Kikobeats/encode-base58#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/encode-base58.svg?style=flat-square)](https://www.npmjs.org/package/encode-base58)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Simple method to encode a Number using base58.

## Install

```bash
$ npm install encode-base58 --save
```

## Usage

```js
const encodeBase58 = require('encode-base58')

encodeBase58(9); // => 'a'
encodeBase58.emojis(9); // => '🔆'
//=> return something
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
