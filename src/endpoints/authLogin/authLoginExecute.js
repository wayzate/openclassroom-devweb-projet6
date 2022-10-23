const jwt = require('jsonwebtoken')

const authLoginExecute = async ({
  dbResults: {
    user: {
      _id: userId = '',
    } = {},
  } = {},
} = {}) => {
  const token = jwt.sign(
    { userId },
    'secret_key_to_complexify',
    { expiresIn: '24h' },
  )

  const responseToClient = {
    userId,
    token,
    success: true,
    message: 'Utilisateur crée !',
  }

  return ({
    responseToClient,
  })
}

exports.default = authLoginExecute
