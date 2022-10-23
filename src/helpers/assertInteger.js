const { equal } = require('assert')

const assertInteger = (input, variableName) => {
  const errorMessage = `${variableName} should be a integer and not: ${input} of type: ${typeof input}`

  equal(typeof input, 'number', errorMessage)
  equal(Number.isNaN(input), false, errorMessage)
  equal(Number.isInteger(input), true, errorMessage)
}

exports.default = assertInteger
