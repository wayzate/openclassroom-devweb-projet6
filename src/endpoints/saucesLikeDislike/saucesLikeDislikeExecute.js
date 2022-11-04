const {
  Sauce,
} = require('../../models')

const saucesLikeDislikeExecute = async ({
  body: {
    like,
    userId,
  } = {},
  params: {
    id = '',
  } = {},
  dbResults: {
    sauce: {
      usersLiked = [],
      usersDisliked = [],
    } = {},
  } = {},
} = {}) => {
  let message

  if (like === 1) {
    message = "Like added"
    await Sauce.updateOne({ _id: id }, {
      $push: { usersLiked: userId },
      $inc: { likes: 1 },
    })
  }
  if (like === -1) {
    message = "Dislike added"
    await Sauce.updateOne({ _id: id }, {
      $push: { usersDisliked: userId },
      $inc: { dislikes: 1 },
    })
  }
  if (like === 0 && usersLiked.includes(userId)) {
    message = "Like removed"
    await Sauce.updateOne({ _id: id }, {
      $pull: { usersLiked: userId },
      $inc: { likes: -1 },
    })
  }
  if (like === 0 && usersDisliked.includes(userId)) {
    message = "Dislike removed"
    await Sauce.updateOne({ _id: id }, {
      $pull: { usersDisliked: userId },
      $inc: { dislikes: -1 },
    })
  }

  const responseToClient = {
    message,
  }

  return ({
    responseToClient,
  })
}

exports.default = saucesLikeDislikeExecute
