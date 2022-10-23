const {
  Sauce,
} = require('../../models')

const saucesLikeDislikeDbRequests = async ({
  params: {
    id = '',
  } = {},
} = {}) => {
  const sauce = await Sauce.findOne({ _id: id })

  return ({
    sauce,
  })
}

exports.default = saucesLikeDislikeDbRequests
