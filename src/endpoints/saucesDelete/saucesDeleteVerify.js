const {
  assertNonEmptyString,
  assertNonEmptyObject,
  assertMongoId,
} = require('../../helpers')

const saucesDeleteVerifyRequest = ({
  dbResults: {
    sauce = {},
    sauce: {
      _id: sauceId,
      imageUrl = '',
    } = {},
  } = {},
} = {}) => {
  assertNonEmptyObject(sauce, 'sauce')
  assertNonEmptyString(imageUrl, 'imageUrl')
  assertMongoId(sauceId, 'sauceId')
}

exports.default = saucesDeleteVerifyRequest
