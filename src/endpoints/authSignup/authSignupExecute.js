const bcrypt = require('bcrypt')
const {
  User,
} = require('../../models')

const signupExecute = async ({
  body: {
    password = '',
    email = '',
  } = {},
} = {}) => {
  const hash = await bcrypt.hash(password, 10)
  const user = new User({
    email,
    password: hash,
  })
  await user.save()

  const responseToClient = {
    success: true,
    message: 'Utilisateur crée !',
  }

  return ({
    responseToClient,
  })
}

exports.default = signupExecute
