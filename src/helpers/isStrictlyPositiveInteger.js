const isStrictlyPositiveInteger = variable => (
  typeof variable === 'number'
  && variable > 0
  && Number.isInteger(variable)
)

exports.default = isStrictlyPositiveInteger
