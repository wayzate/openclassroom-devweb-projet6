const {
  isEmpty,
} = require('lodash')
const isObject = require('./isObject').default

const isNonEmptyObject = variable => (
  isObject(variable)
  && !isEmpty(variable)
)

exports.default = isNonEmptyObject
