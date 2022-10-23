const {
  User,
} = require('../../models')

const authLoginDbRequests = async ({
  body: {
    email = '',
  } = {},
} = {}) => {
  const user = await User.findOne({ email })

  return ({
    user,
  })
}

exports.default = authLoginDbRequests
