const saucesGetOneAssert = require('./saucesGetOneAssert').default
const saucesGetOneVerify = require('./saucesGetOneVerify').default
const saucesGetOneDbRequests = require('./saucesGetOneDbRequests').default
const saucesGetOneExecute = require('./saucesGetOneExecute').default

const saucesGetOneHandle = async (req, res) => {
  try {
    const {
      params,
    } = req

    saucesGetOneAssert({
      params,
    })

    const dbResults = await saucesGetOneDbRequests({
      params,
    })

    await saucesGetOneVerify({
      params,
      dbResults,
    })

    const {
      responseToClient,
    } = await saucesGetOneExecute({
      params,
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

exports.default = saucesGetOneHandle
