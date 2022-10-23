const isArray = require('./isArray').default

const isObject = variable => (
  typeof variable === 'object'
  && variable !== null
  && !isArray(variable)
  && (typeof variable !== 'undefined') // logically useless
)

exports.default = isObject
