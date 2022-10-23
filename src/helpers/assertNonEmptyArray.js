const { equal } = require('assert')
const assertArray = require('./assertArray').default

const assertNonEmptyArray = (input, variableName) => {
  assertArray(input, variableName)
  equal(!!input.length, true, `!!${variableName}.length should be true not: ${input} of type ${typeof input}`)
}

exports.default = assertNonEmptyArray
