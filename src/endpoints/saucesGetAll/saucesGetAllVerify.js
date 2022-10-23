const {
  assertArray,
} = require('../../helpers')

const saucesGetAllVerifyRequest = ({
  dbResults: {
    sauces,
  } = {},
} = {}) => {
  assertArray(sauces, 'sauces')
}

exports.default = saucesGetAllVerifyRequest
