const mongoose = require('mongoose')
const { equal } = require('assert')

const assertMongoId = (input, variableName) => {
  const errorMessage = `${variableName} should be a mongo id and not: ${input} of type: ${typeof input}`

  equal(typeof input, 'object', errorMessage)
  equal(input instanceof mongoose.Types.ObjectId, true, errorMessage)
}

exports.default = assertMongoId
