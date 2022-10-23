const {
  assertMongoId,
  assertNonEmptyObject,
} = require('../../helpers')

const saucesGetOneVerifyRequest = ({
  dbResults: {
    sauce = {},
    sauce: {
      _id: sauceId,
    } = {},
  } = {},
} = {}) => {
  assertNonEmptyObject(sauce, 'sauce')
  assertMongoId(sauceId, 'sauceId')
}

exports.default = saucesGetOneVerifyRequest
