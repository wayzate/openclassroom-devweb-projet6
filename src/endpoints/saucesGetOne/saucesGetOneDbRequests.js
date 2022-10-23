const {
  Sauce,
} = require('../../models')

const saucesGetOneDbRequests = async ({
  params: {
    id = '',
  } = {},
} = {}) => {
  const sauce = await Sauce.findOne({ _id: id })

  return ({
    sauce,
  })
}

exports.default = saucesGetOneDbRequests
