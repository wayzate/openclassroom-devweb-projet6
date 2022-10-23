const { equal } = require('assert')

const assertOneOf = (input, possibilities, variableName) => {
  equal(
    possibilities.indexOf(input) !== -1,
    true,
    `${variableName} should be one of ${possibilities} and not ${input}`,
  )
}

exports.default = assertOneOf
