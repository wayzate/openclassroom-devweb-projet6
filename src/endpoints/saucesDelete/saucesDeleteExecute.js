const {
  unlinkSync,
} = require('fs')
const {
  Sauce,
} = require('../../models')

const saucesDeleteExecute = async ({
  params: {
    id,
  } = {},
  dbResults: {
    sauce: {
      imageUrl = '',
    } = {},
  } = {},
} = {}) => {
  const fileName = imageUrl.split('/images/')[1]

  await Sauce.deleteOne({ _id: id })
  unlinkSync(`images/${fileName}`)
  const responseToClient = {
    message: 'Sauce supprimée avec succès !',
    success: true,
  }

  return ({
    responseToClient,
  })
}

exports.default = saucesDeleteExecute
