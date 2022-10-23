const saucesGetOneExecute = async ({
  dbResults: {
    sauce,
  } = {},
} = {}) => {
  const responseToClient = sauce

  return ({
    responseToClient,
  })
}

exports.default = saucesGetOneExecute
