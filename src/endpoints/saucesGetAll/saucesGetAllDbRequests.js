const {
  Sauce,
} = require('../../models')

const saucesGetAllDbRequests = async () => {
  const sauces = await Sauce.find()

  return ({
    sauces,
  })
}

exports.default = saucesGetAllDbRequests
