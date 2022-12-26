const skillModel = require('../model/skill.model')
const { success, failed } = require('../helper/response')

const skillController = {
  list: (req, res) => {
    skillModel
      .getAllSkill()
      .then((result) => {
        success(res, result.rows, 'success', 'Get All Skill List Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get all Skill list')
      })
  },

  listByUser: (req, res) => {
    const id_user = req.params.id
    skillModel
      .getAllSkillByUser(id_user)
      .then((result) => {
        success(
          res,
          result.rows,
          'success',
          'Get All Skill By User Success'
        )
      })
      .catch((err) => {
        failed(
          res,
          err.message,
          'failed',
          'Failed to get all Skill by user'
        )
      })
  },
  detail: (req, res) => {
    const id_skill = req.params.id
    skillModel
      .getDetailSkill(id_skill)
      .then((result) => {
        success(res, result.rows, 'success', 'Get Detail skill success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get detail skill')
      })
  },
  destroy: (req, res) => {
    const id_skill = req.params.id
    skillModel
      .deleteSkill(id_skill)
      .then((result) => {
        success(res, result.rowCount, 'success', 'Delete skill Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to delete skill')
      })
  },
  insert: (req, res) => {
    try {
      const { skill, id_user } = req.body
    //   const imageporto = req.file.filename
      const data = {
        skill,
        id_user
      }
      console.log(data)
      skillModel
        .insertSkill(data)
        .then((result) => {
          success(res, result.rows, 'success', 'Insert skill Success')
        })
        .catch((err) => {
          failed(res, err.message, 'failed', 'Failed to insert skill')
        })
    } catch (err) {
      console.log(err)
    }
  },
  
  updateSkill: (req, res) => {
    const id_porto = req.params.id
    const imageporto = req.file.filename
    const { name, linkrepo, type } = req.body
    const data = {
      id_porto,
      name,
      linkrepo,
      imageporto,
      type
    }
    skillModel
      .updateSKill(data)
      .then((result) => {
        success(res, result.rowCount, 'success', 'Update skill Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to update skill')
      })
  }
}

module.exports = skillController
