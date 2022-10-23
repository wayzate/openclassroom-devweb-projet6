const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) => {
  try {
    const {
      headers: {
        authorization = '',
      } = {},
      body: {
        userId: bodyUserId = '',
      } = {},
    } = req

    const token = authorization.split(' ')[1]
    const {
      userId = '',
    } = jwt.verify(token, 'secret_key_to_complexify')
    if (bodyUserId && bodyUserId !== userId) {
      throw new Error('userId non valide')
    } else {
      next()
    }
  } catch (e) {
    res.status(401).json({
      error: e.message || 'Requête non authentifiée !',
    })
  }
}

exports.default = authenticateUser
