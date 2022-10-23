const saucesDeleteAssert = require('./saucesDeleteAssert').default
const saucesDeleteVerify = require('./saucesDeleteVerify').default
const saucesDeleteDbRequests = require('./saucesDeleteDbRequests').default
const saucesDeleteExecute = require('./saucesDeleteExecute').default

const saucesDeleteHandle = async (req, res) => {
  try {
    const {
      body,
      params,
    } = req

    saucesDeleteAssert({
      body,
      params,
    })

    const dbResults = await saucesDeleteDbRequests({
      body,
      params,
    })

    await saucesDeleteVerify({
      body,
      dbResults,
      params,
    })

    const {
      responseToClient,
    } = await saucesDeleteExecute({
      body,
      dbResults,
      params,
    })

    res.status(200).send(responseToClient)
  } catch (e) {
    const {
      message = '',
      response: {
        data = {},
      } = {},
    } = e || {}
    res.status(400).send({
      message,
      responseData: data,
    })
  }
}

exports.default = saucesDeleteHandle
