const {
  Sauce,
} = require('../../models')

const saucesDeleteDbRequests = async ({
  params: {
    id = '',
  } = {},
} = {}) => {
  const sauce = await Sauce.findOne({ _id: id })

  return ({
    sauce,
  })
}

exports.default = saucesDeleteDbRequests
