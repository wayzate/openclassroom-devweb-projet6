const {
  assertNonEmptyString,
  assertOneOf,
} = require('../../helpers')

const saucesLikeDislikeAssert = ({
  body: {
    like = 0,
    userId = '',
  } = {},
  params: {
    id = '',
  } = {},
} = {}) => {
  assertOneOf(like, [-1, 0, 1], 'like')
  assertNonEmptyString(userId, 'userId')
  assertNonEmptyString(id, 'id')
}

exports.default = saucesLikeDislikeAssert
