const { equal } = require('assert')

const assertNumber = (input, variableName) => equal(
  (typeof input === 'number') && !Number.isNaN(input),
  true,
  `${variableName} should be a number and not: ${input}`,
)

exports.default = assertNumber
