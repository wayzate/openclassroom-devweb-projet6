// require('./src/loaders/env')
// SERVER
// require('./startMongo')
const { myApp } = require('./src/index.js') // eslint-disable-line

console.log('----')
console.log('--- START.JS')

const {
  SERVER_PORT = 3000,
  ENVIRONMENT = 'development',
} = process.env

console.log({
  SERVER_PORT,
  ENVIRONMENT,
})

console.log('----')
console.log('----')

try {
  myApp.listen(SERVER_PORT, () => console.log(`Express server listening on port ${SERVER_PORT}`))
} catch (e) { console.error(e) }
