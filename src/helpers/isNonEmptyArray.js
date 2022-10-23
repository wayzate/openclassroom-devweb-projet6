const isArray = require('./isArray').default

const isNonEmptyArray = variable => (
  isArray(variable)
  && variable.length !== 0
)

exports.default = isNonEmptyArray
