const { equal } = require('assert')

const assertArray = (input, variableName) => equal(
  Array.isArray(input),
  true,
  `${variableName} should be an array and not: ${input} of type ${typeof input}`,
)

exports.default = assertArray
