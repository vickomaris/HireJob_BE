const express = require('express')
const { list, listByUser, detail, destroy, insert } = require('../controller/experience.controller')
const router = express.Router()

// const jwtAuth = require('../middleware/jwtAuth')
// const { isAdmin } = require('../middleware/authorization')
// const photo_porto = require('../middleware/photo_porto')
// const delete_porto = require('../middleware/delete_portofolio')

router
  .get('/experience', list)
  .get('/experience/user/:id', listByUser)
  .get('/experience/detail/:id', detail)
  .post('/experience/insert', insert)
  .delete('/experience/delete/:id', destroy)
//   .put('/experience/update/:id', updatePortofolio)

module.exports = router
// harus di ekspor agar bisa dipanggil di index
