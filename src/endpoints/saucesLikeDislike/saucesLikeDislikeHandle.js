const saucesLikeDislikeAssert = require('./saucesLikeDislikeAssert').default
const saucesLikeDislikeVerify = require('./saucesLikeDislikeVerify').default
const saucesLikeDislikeDbRequests = require('./saucesLikeDislikeDbRequests').default
const saucesLikeDislikeExecute = require('./saucesLikeDislikeExecute').default

const saucesLikeDislikeHandle = async (req, res) => {
  try {
    const {
      body,
      params,
    } = req

    saucesLikeDislikeAssert({
      body,
      params,
    })

    const dbResults = await saucesLikeDislikeDbRequests({
      body,
      params,
    })

    await saucesLikeDislikeVerify({
      body,
      dbResults,
      params,
    })

    const {
      responseToClient,
    } = await saucesLikeDislikeExecute({
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

exports.default = saucesLikeDislikeHandle
