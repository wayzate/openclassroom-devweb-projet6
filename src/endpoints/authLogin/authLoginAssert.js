const {
  equal,
} = require('assert')
const {
  isPasswordFormatValid,
  assertEmail,
} = require('../../helpers')

const authLoginAssert = ({
  body: {
    password = '',
    email = '',
  } = {},
} = {}) => {
  equal(isPasswordFormatValid(password), true, 'Format de mot de passe incorrect')
  assertEmail(email, 'email')
}

exports.default = authLoginAssert
