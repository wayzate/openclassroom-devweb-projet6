const {
  equal,
} = require('assert')
const bcrypt = require('bcrypt')
const {
  assertNonEmptyObject,
  assertMongoId,
} = require('../../helpers')

const loginVerifyRequest = async ({
  body: {
    password = '',
    // email = '',
  } = {},
  dbResults: {
    user,
    user: {
      _id: userId,
      password: passwordInDb = '',
    } = {},
  } = {},
} = {}) => {
  assertNonEmptyObject(user, 'user')
  assertMongoId(userId, 'userId')
  const isCorrectPassword = await bcrypt.compare(password, passwordInDb)
  equal(isCorrectPassword, true, 'Wrong password')
}

exports.default = loginVerifyRequest
