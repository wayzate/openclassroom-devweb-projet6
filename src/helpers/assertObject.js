const assert = require('assert')
const {
  isObject,
} = require('lodash')

const assertObject = (variable, variableName) => assert(
  isObject(variable),
  `${variableName} is not an object. variable: ${variable} of type ${typeof variable}`,
)

exports.default = assertObject
