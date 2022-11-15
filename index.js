
require('dotenv').config()
// DEKLARE LIBRARY

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')

// BUAT ROUTE
const userRouter = require('./src/router/user.routes')
const perekrutRouter = require('./src/router/perekrut.routes')

const app = express()
try {
  app.use(express.static('public'))
  app.use(express.static('public/photo_perekrut'))
  app.use(express.static('photofoods'))
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(xss())
  app.use(cors())
  app.use(userRouter)
  app.use(perekrutRouter)
} catch (error) {
  console.log(error)
}

// jalankan express

app.listen(3001, () => {
  console.log('SERVICE RUNNING ON PORT 3001')
})
