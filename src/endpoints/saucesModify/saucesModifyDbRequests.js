const {
  Sauce,
} = require('../../models')

const saucesModifyDbRequests = async ({
  file,
  params: {
    id = '',
  } = {},
} = {}) => {
  if (file) {
    const sauce = await Sauce.findOne({ _id: id })
    return ({
      sauce,
    })
  }
  return ({
    sauce: {},
  })
}

exports.default = saucesModifyDbRequests
