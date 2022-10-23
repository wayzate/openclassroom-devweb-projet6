const saucesCreateAssert = require('./saucesCreateAssert').default
const saucesCreateVerify = require('./saucesCreateVerify').default
const saucesCreateDbRequests = require('./saucesCreateDbRequests').default
const saucesCreateExecute = require('./saucesCreateExecute').default

const saucesCreateHandle = async (req, res) => {
  try {
    const {
      body,
      file,
      protocol,
    } = req
    const host = req.get('host')

    saucesCreateAssert({
      body,
      file,
      host,
      protocol,
    })

    const dbResults = await saucesCreateDbRequests({
      body,
      file,
      host,
      protocol,
    })

    await saucesCreateVerify({
      body,
      dbResults,
      file,
      host,
      protocol,
    })

    const {
      responseToClient,
    } = await saucesCreateExecute({
      body,
      dbResults,
      file,
      host,
      protocol,
    })

    res.status(201).send(responseToClient)
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

exports.default = saucesCreateHandle
