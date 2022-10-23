const CircularJSON = require('circular-json')
const assert = require('assert')
const isNonEmptyObject = require('./isNonEmptyObject').default

const assertNonEmptyObject = (variable, variableName) => assert(
  isNonEmptyObject(variable),
  `${variableName} is not a non-empty-object. variable: ${variable} of type ${typeof variable} is ${CircularJSON.stringify(variable)}`,
)

exports.default = assertNonEmptyObject
