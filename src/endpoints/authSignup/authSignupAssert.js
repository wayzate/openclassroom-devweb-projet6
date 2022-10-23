const {
  assertEmail,
  assertValidPassword,
} = require('../../helpers')

const signupAssert = ({
  body: {
    password,
    email,
  },
}) => {
  assertValidPassword(password, 'password')
  assertEmail(email, 'email')
}

exports.default = signupAssert
