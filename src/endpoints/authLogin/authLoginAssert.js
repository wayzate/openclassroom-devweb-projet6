const {
  assertEmail,
  assertValidPassword,
} = require('../../helpers')

const authLoginAssert = ({
  body: {
    password,
    email,
  },
}) => {
  assertValidPassword(password, 'password')
  assertEmail(email, 'email')
}

exports.default = authLoginAssert
