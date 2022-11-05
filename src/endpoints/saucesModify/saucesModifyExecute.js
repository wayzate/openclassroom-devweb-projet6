const {
  unlinkSync,
} = require('fs')
const {
  Sauce,
} = require('../../models')

const saucesModifyExecute = async ({
  body = {},
  body: {
    sauce: bodySauceString = {},
  } = {},
  dbResults: {
    sauce: {
      imageUrl = '',
    } = {},
  } = {},
  protocol,
  file,
  file: {
    filename = '',
  } = {},
  host,
  params: {
    id = '',
  } = {},
} = {}) => {
  let newSauce

  if (file) {
    unlinkSync(`images/${imageUrl.split('/images/')[1]}`)

    newSauce = {
      ...JSON.parse(bodySauceString),
      imageUrl: `${protocol}://${host}/images/${
        filename
      }`,
    }
  } else {
    newSauce = {
      ...body,
    }
  }

  await Sauce.updateOne({ _id: id }, {
    ...newSauce,
    _id: id,
  })

  const responseToClient = {
    success: true,
  }

  return ({
    responseToClient,
  })
}

exports.default = saucesModifyExecute
