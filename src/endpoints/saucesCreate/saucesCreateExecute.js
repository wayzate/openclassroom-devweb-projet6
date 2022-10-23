const {
  Sauce,
} = require('../../models')

const saucesCreateExecute = async ({
  body: {
    sauce: sauceString,
  } = {},
  protocol,
  host,
  file: {
    filename = '',
  } = {},
} = {}) => {
  const sauce = JSON.parse(sauceString)
  const newSauce = new Sauce({
    ...sauce,
    // On modifie l'URL de l'image, on veut l'URL complète, quelque chose dynamique avec les segments de l'URL
    imageUrl: `${protocol}://${host}/images/${filename}`,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
  })
  await newSauce.save()

  const responseToClient = {
    success: true,
    message: 'Sauce enregistrée !',
  }

  return ({
    responseToClient,
  })
}

exports.default = saucesCreateExecute
