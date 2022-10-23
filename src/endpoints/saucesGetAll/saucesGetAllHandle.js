const saucesGetAllAssert = require('./saucesGetAllAssert').default
const saucesGetAllVerify = require('./saucesGetAllVerify').default
const saucesGetAllDbRequests = require('./saucesGetAllDbRequests').default
const saucesGetAllExecute = require('./saucesGetAllExecute').default

const saucesGetAllHandle = async (req, res) => {
  try {
    const {
      body,
    } = req

    saucesGetAllAssert({
      body,
    })

    const dbResults = await saucesGetAllDbRequests({
      body,
    })

    await saucesGetAllVerify({
      body,
      dbResults,
    })

    const {
      responseToClient,
    } = await saucesGetAllExecute({
      body,
      dbResults,
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

exports.default = saucesGetAllHandle
