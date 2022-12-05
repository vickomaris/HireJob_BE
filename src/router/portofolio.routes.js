const express = require('express')
const { list, listByUser, detail, destroy, insert, updatePortofolio } = require('../controller/portofolio.controller')
const router = express.Router()

const jwtAuth = require('../middleware/jwtAuth')
// const { isAdmin } = require('../middleware/authorization')
const photo_porto = require('../middleware/photo_porto')
const delete_porto = require('../middleware/delete_portofolio')

router
  .get('/portofolio', list)
  .get('/portofolio/user/:id', listByUser)
  .get('/portofolio/detail/:id', detail)
  .post('/portofolio/insert', photo_porto, insert)
  .delete('/portofolio/delete/:id', delete_porto, destroy)
  .put('/portofolio/update/:id', delete_porto, photo_porto, updatePortofolio)

module.exports = router
// harus di ekspor agar bisa dipanggil di index
