const isArray = require('./isArray').default

const isEmptyArray = variable => (
  isArray(variable)
  && variable.length === 0
)

exports.default = isEmptyArray
