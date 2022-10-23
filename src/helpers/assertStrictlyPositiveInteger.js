const { equal } = require('assert')

const assertStrictlyPositiveInteger = (input, variableName) => {
  const errorMessage = `${variableName} should be a strict positive integer and not: ${input}`

  equal(typeof input, 'number', errorMessage)
  equal(input > 0, true, errorMessage)
  equal(Number.isNaN(input), false, errorMessage)
  equal(Number.isInteger(input), true, errorMessage)
}

exports.default = assertStrictlyPositiveInteger
