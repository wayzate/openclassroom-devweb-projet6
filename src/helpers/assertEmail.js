const { equal } = require('assert')
const assertString = require('./assertString').default
const isEmail = require('./isEmail').default

const assertEmail = (input, variableName) => {
  assertString(input, variableName)
  equal(
    isEmail(input),
    true,
    `${variableName} should be an email and not: ${input} of type ${typeof input}`,
  )
}
exports.default = assertEmail
