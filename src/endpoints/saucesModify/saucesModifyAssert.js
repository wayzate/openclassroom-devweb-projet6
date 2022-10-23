const {
  assertNonEmptyString,
  assertNonEmptyObject,
  assertOneOf,
} = require('../../helpers')

const saucesModifyAssert = ({
  body = {},
  body: {
    sauce: bodySauce = {},
  } = {},
  protocol,
  file,
  file: {
    filename = '',
  } = {},
  host,
  params: {
    id = '',
  } = {},
} = {}) => {
  assertNonEmptyString(host, 'host')
  assertNonEmptyString(id, 'id')
  assertOneOf(protocol, ['http', 'https'], 'protocol')

  const isFileImageProvided = !!file
  if (isFileImageProvided) {
    assertNonEmptyObject(bodySauce)
    assertNonEmptyString(filename)
  } else {
    assertNonEmptyObject(body, 'body')
  }
}

exports.default = saucesModifyAssert
