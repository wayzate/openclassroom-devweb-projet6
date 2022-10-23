const saucesGetAllExecute = async ({
  dbResults: {
    sauces,
  } = {},
} = {}) => {
  const responseToClient = sauces

  return ({
    responseToClient,
  })
}

exports.default = saucesGetAllExecute
