const { equal } = require('assert')
const isPasswordFormatValid = require('./isPasswordFormatValid').default

const assertValidPassword = (input, variableName) => {
  const errorMessage = `${variableName} should be a valid password and not: ${input} of type: ${typeof input}`

  equal(isPasswordFormatValid(input), true, errorMessage)
}

exports.default = assertValidPassword
