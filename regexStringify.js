/*
 * Project: regex-stringify
 * Version: 1.0.0
 * Author: delvedor
 * Twitter: @delvedor
 * License: MIT
 * GitHub: https://github.com/delvedor/regex-stringify
 */

'use strict'

function regexStringify (reg) {
  reg = reg instanceof RegExp ? reg.source : reg

  if (typeof reg !== 'string') {
    throw new Error('reg is not a string')
  }

  for (let i = 0, len = reg.length; i < len; i++) {
    if (reg[i] === '\\' || reg[i] === '"') {
      reg = reg.substring(0, i) + '\\' + reg.substring(i++)
      len += 2
    }
  }

  return '"' + reg + '"'
}

module.exports = regexStringify
