const express = require('express')
const { list, listByUser, detail, destroy, insert, updateSkill } = require('../controller/skill.controller')
const router = express.Router()

const jwtAuth = require('../middleware/jwtAuth')
// const { isAdmin } = require('../middleware/authorization')
// const photo_porto = require('../middleware/photo_porto')
// const delete_porto = require('../middleware/delete_portofolio')

router
  .get('/skill', list)
  .get('/skill/user/:id', listByUser)
  .get('/skill/detail/:id', detail)
  .post('/skill/insert', insert)
  .delete('/skill/delete/:id', destroy)
  .put('/skill/update/:id', updateSkill)

module.exports = router
