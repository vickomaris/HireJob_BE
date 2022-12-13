const express = require('express')
const { list, detail, insert, update, destroy, detailname, updatePhoto } = require('../controller/user.controller')
const { register, login } = require('../controller/auth.controller')
const router = express.Router()

const jwtAuth = require('../middleware/jwtAuth')
// const { isAdmin } = require('../middleware/authorization')
const upload = require('../middleware/upload')
const deleteFile = require('../middleware/delete_userfile')

router
  .get('/user/', list)
  .get('/user/:id', detail)
  .get('/user/search/:username', detailname)
  .post('/user/', insert)
  .put('/user/:id_user', update)
  .put('/user/photo/:id_user', deleteFile, upload, updatePhoto)
  .delete('/user/:id_user', destroy)

  // register
  .post('/register', register)
  // login
  .post('/login', login)

module.exports = router
