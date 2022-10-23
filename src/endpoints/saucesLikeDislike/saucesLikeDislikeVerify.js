const {
  assertArray,
} = require('../../helpers')

const saucesLikeDislikeVerifyRequest = ({
  dbResults: {
    sauce: {
      usersLiked = [],
      usersDisliked = [],
    } = {},
  } = {},
} = {}) => {
  assertArray(usersLiked, 'usersLiked')
  assertArray(usersDisliked, 'usersDisliked')
}

exports.default = saucesLikeDislikeVerifyRequest
