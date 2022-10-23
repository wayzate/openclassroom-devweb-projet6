const { equal } = require('assert')
const assertArray = require('./assertArray').default

const assertEmptyArray = (input, variableName) => {
  assertArray(input, variableName)
  equal(input.length === 0, true, `!!${variableName}.length should be 0. ${variableName}:${input} of type ${typeof input}`)
}

exports.default = assertEmptyArray
