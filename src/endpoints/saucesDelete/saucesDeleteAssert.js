const {
  assertNonEmptyString,
} = require('../../helpers')

const saucesDeleteAssert = ({
  params: {
    id = '',
  } = {},
} = {}) => {
  assertNonEmptyString(id, 'params.id')
}

exports.default = saucesDeleteAssert
