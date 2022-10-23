const {
  isEmpty,
} = require('lodash')
const isObject = require('./isObject').default

const isEmptyObject = variable => (
  isObject(variable)
  && isEmpty(variable)
)

exports.default = isEmptyObject
