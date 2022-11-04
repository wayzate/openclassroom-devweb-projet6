// ============================== Imports ========================
const express = require('express')
const cors = require('cors')()
const helmet = require('helmet')
const session = require('cookie-session')
const mongoose = require('mongoose')
const path = require('path')

// ============================== Express server ========================
const app = express()
app.use(cors)
app.use(express.json()) // TO TEST
app.use(helmet())
app.use(session({
  name: 'session',
  secret: 'backend_secret_key_to_change_for_prod',
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'http://localhost:3000',
    expires: new Date(Date.now() + 3600 * 1000),
  },
}))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  res.setHeader('Content-Security-Policy', "default-src 'self'")
  next()
})
app.use(
  '/images',
  express.static(
    path.join(__dirname, '../images'),
  ),
)

const server = require('http').Server(app)

// ============================== MongoDb ========================
mongoose.connect('mongodb+srv://wistiti:wistiti@cluster0.jtrudc6.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(e => console.log('Connexion à MongoDB échouée :', e.message))

// ==== Endpoints Handlers
const {
  authenticateUser,
  multer,
} = require('./middleware')
const {
  authSignupHandle,
} = require('./endpoints/authSignup')
const {
  authLoginHandle,
} = require('./endpoints/authLogin')
const {
  saucesCreateHandle,
} = require('./endpoints/saucesCreate')
const {
  saucesGetAllHandle,
} = require('./endpoints/saucesGetAll')
const {
  saucesGetOneHandle,
} = require('./endpoints/saucesGetOne')
const {
  saucesModifyHandle,
} = require('./endpoints/saucesModify')
const {
  saucesDeleteHandle,
} = require('./endpoints/saucesDelete')
const {
  saucesLikeDislikeHandle,
} = require('./endpoints/saucesLikeDislike')

// ============================== ENDPOINTS ========================
app.post('/api/auth/signup', authSignupHandle)
app.post('/api/auth/login', authLoginHandle)
app.post('/api/sauces/', authenticateUser, multer, saucesCreateHandle)
app.get('/api/sauces/', authenticateUser, saucesGetAllHandle)
app.get('/api/sauces/:id', authenticateUser, saucesGetOneHandle)
app.put('/api/sauces/:id', authenticateUser, multer, saucesModifyHandle)
app.delete('/api/sauces/:id', authenticateUser, saucesDeleteHandle)
app.post('/api/sauces/:id/like', authenticateUser, saucesLikeDislikeHandle)

exports.myApp = server
