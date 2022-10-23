const authSignupAssert = require('./authSignupAssert').default
const authSignupVerify = require('./authSignupVerify').default
const authSignupDbRequests = require('./authSignupDbRequests').default
const authSignupExecute = require('./authSignupExecute').default

const authSignupHandle = async (req, res) => {
  try {
    console.log('authSignupHandle.js TRIGGERED')
    const {
      body,
    } = req

    authSignupAssert({
      body,
    })

    const dbResults = await authSignupDbRequests({
      body,
    })

    await authSignupVerify({
      body,
      dbResults,
    })

    const {
      responseToClient,
    } = await authSignupExecute({
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

exports.default = authSignupHandle
