const { equal } = require('assert')

const assertTruthy = (input, variableName) => equal(
  !!input,
  true,
  `!!${variableName} should be 'true'  and not: ${input}`,
)

exports.default = assertTruthy
