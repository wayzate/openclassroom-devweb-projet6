const {
  assertNonEmptyString,
  assertMongoId,
} = require('../../helpers')

const saucesModifyVerifyRequest = ({
  file,
  dbResults: {
    sauce: {
      _id,
      imageUrl = '',
    } = {},
  } = {},
} = {}) => {
  if (file) {
    assertMongoId(_id, '_id')
    assertNonEmptyString(imageUrl, 'imageUrl')
  }
}

exports.default = saucesModifyVerifyRequest
