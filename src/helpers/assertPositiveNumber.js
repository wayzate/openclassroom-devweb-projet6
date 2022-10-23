const { equal } = require('assert')

const assertPositiveNumber = (input, variableName) => {
  const errorMessage = `${variableName} should be positive and not: ${input}`
  equal(typeof input, 'number', errorMessage)
  equal(Number.isNaN(input), false, errorMessage)
  equal(input >= 0, true, errorMessage)
}

exports.default = assertPositiveNumber
