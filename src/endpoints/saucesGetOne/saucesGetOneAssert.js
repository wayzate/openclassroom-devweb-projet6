const {
  assertNonEmptyString,
} = require('../../helpers')

const saucesGetOneAssert = ({
  params: {
    id = '',
  } = {},
} = {}) => {
  assertNonEmptyString(id, 'id')
}

exports.default = saucesGetOneAssert
