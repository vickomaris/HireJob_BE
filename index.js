
require('dotenv').config()
// DEKLARE LIBRARY

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')

// BUAT ROUTE
const portofolioRouter = require('./src/router/portofolio.routes')
const userRouter = require('./src/router/user.routes')
const perekrutRouter = require('./src/router/perekrut.routes')
const skillRouter = require('./src/router/skill.routes')
const experienceRouter = require('./src/router/experience.routes')

const app = express()
try {
  app.use(express.static('public'))
  app.use(express.static('public/photo_porto'))
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(xss())
  app.use(cors())
  app.use(portofolioRouter)
  app.use(userRouter)
  app.use(perekrutRouter)
  app.use(skillRouter)
  app.use(experienceRouter)
} catch (error) {
  console.log(error)
}

// jalankan express

app.listen(process.env.PORT, () => {
  console.log('SERVICE RUNNING ON PORT 3001')
})
