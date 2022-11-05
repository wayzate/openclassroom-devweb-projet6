const saucesModifyAssert = require('./saucesModifyAssert').default
const saucesModifyVerify = require('./saucesModifyVerify').default
const saucesModifyDbRequests = require('./saucesModifyDbRequests').default
const saucesModifyExecute = require('./saucesModifyExecute').default

const saucesModifyHandle = async (req, res) => {
  try {
    const {
      body,
      protocol,
      file,
      params,
    } = req
    const host = req.get('host')

    saucesModifyAssert({
      body,
      protocol,
      file,
      host,
      params,
    })

    const dbResults = await saucesModifyDbRequests({
      body,
      protocol,
      file,
      host,
      params,
    })

    await saucesModifyVerify({
      body,
      dbResults,
      protocol,
      file,
      host,
      params,
    })

    const {
      responseToClient,
    } = await saucesModifyExecute({
      body,
      dbResults,
      protocol,
      file,
      host,
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
    console.error(e)
    res.status(400).send({
      message,
      responseData: data,
    })
  }
}

exports.default = saucesModifyHandle
