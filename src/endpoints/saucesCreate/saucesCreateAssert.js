const {
  assertNonEmptyObject,
  assertNonEmptyString,
  assertOneOf,
} = require('../../helpers')

const saucesCreateAssert = ({
  body: {
    sauce = '',
  } = {},
  file,
  file: {
    filename = '',
  } = {},
  protocol = '',
} = {}) => {
  assertNonEmptyObject(file, 'file')
  assertNonEmptyString(filename, 'filename')
  assertNonEmptyString(sauce, 'sauce')
  assertOneOf(protocol, ['http', 'https'], 'protocol')
}

exports.default = saucesCreateAssert
