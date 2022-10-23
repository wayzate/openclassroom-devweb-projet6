const authLoginAssert = require('./authLoginAssert').default
const authLoginVerify = require('./authLoginVerify').default
const authLoginDbRequests = require('./authLoginDbRequests').default
const authLoginExecute = require('./authLoginExecute').default

const authLoginHandle = async (req, res) => {
  try {
    console.log('authLoginHandle.js TRIGGERED')
    const {
      body,
    } = req

    authLoginAssert({
      body,
    })

    const dbResults = await authLoginDbRequests({
      body,
    })

    await authLoginVerify({
      body,
      dbResults,
    })

    const {
      responseToClient,
    } = await authLoginExecute({
      body,
      dbResults,
    })

    res.status(200).send(responseToClient)
  } catch (e) {
    console.error(e)
    const {
      message = '',
      response: {
        data = {},
      } = {},
    } = e || {}

    res.status(400).send({
      message,
      error: e,
      responseData: data,
    })
  }
}

exports.default = authLoginHandle
