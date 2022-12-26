const experienceModel = require('../model/experience.model')
const { success, failed } = require('../helper/response')

const experienceController = {
  list: (req, res) => {
    experienceModel
      .getAllExperience()
      .then((result) => {
        success(res, result.rows, 'success', 'Get All experience List Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get all experience list')
      })
  },

  listByUser: (req, res) => {
    const id_user = req.params.id
    experienceModel
      .getAllExperienceByUser(id_user)
      .then((result) => {
        success(
          res,
          result.rows,
          'success',
          'Get All experience By User Success'
        )
      })
      .catch((err) => {
        failed(
          res,
          err.message,
          'failed',
          'Failed to get all experience by user'
        )
      })
  },
  detail: (req, res) => {
    const id_experience = req.params.id
    experienceModel
      .getDetailExperience(id_experience)
      .then((result) => {
        success(res, result.rows, 'success', 'Get Detail ecperience success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get detail ecperience')
      })
  },
  destroy: (req, res) => {
    const id_experience = req.params.id
    experienceModel
      .deleteExperience(id_experience)
      .then((result) => {
        success(res, result.rowCount, 'success', 'Delete experience Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to delete experience')
      })
  },
  insert: (req, res) => {
    try {
      const { posisi, companyexp, startyear, endyear, descriptionexp, id_user } = req.body
    //   const imageporto = req.file.filename
      const data = {
        posisi,
        companyexp,
        startyear,
        endyear,
        descriptionexp,
        id_user
      }
      experienceModel
        .insertExperience(data)
        .then((result) => {
          success(res, result.rows, 'success', 'Insert Experience Success')
        })
        .catch((err) => {
          failed(res, err.message, 'failed', 'Failed to insert Experience')
        })
    } catch (err) {
      console.log(err)
    }
  }
//   updatePortofolio: (req, res) => {
//     const id_porto = req.params.id
//     const imageporto = req.file.filename
//     const { name, linkrepo, type } = req.body
//     const data = {
//       id_porto,
//       name,
//       linkrepo,
//       imageporto,
//       type
//     }
//     experienceModel
//       .updatePortofolio(data)
//       .then((result) => {
//         success(res, result.rowCount, 'success', 'Update portofolio Success')
//       })
//       .catch((err) => {
//         failed(res, err.message, 'failed', 'Failed to update portofolio')
//       })
//   }
}

module.exports = experienceController
