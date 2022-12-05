const portofolioModel = require('../model/portofolio.model')
const { success, failed } = require('../helper/response')

const portofolioController = {
  list: (req, res) => {
    portofolioModel
      .getAllPortofolio()
      .then((result) => {
        success(res, result.rows, 'success', 'Get All Flight List Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get all flight list')
      })
  },

  listByUser: (req, res) => {
    const id_user = req.params.id
    portofolioModel
      .getAllPortofolioByUser(id_user)
      .then((result) => {
        success(
          res,
          result.rows,
          'success',
          'Get All Portofolio By User Success'
        )
      })
      .catch((err) => {
        failed(
          res,
          err.message,
          'failed',
          'Failed to get all Portofolio by user'
        )
      })
  },
  detail: (req, res) => {
    const id_porto = req.params.id
    portofolioModel
      .getDetailPortofolio(id_porto)
      .then((result) => {
        success(res, result.rows, 'success', 'Get Detail portofolio success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get detail portofolio')
      })
  },
  destroy: (req, res) => {
    const id_porto = req.params.id
    portofolioModel
      .deletePortofolio(id_porto)
      .then((result) => {
        success(res, result.rowCount, 'success', 'Delete portofolio Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to delete portofolio')
      })
  },
  insert: (req, res) => {
    try {
      const { name, linkrepo, type, id_user } = req.body
      const image = req.file.filename
      const data = {
        name,
        linkrepo,
        image,
        type,
        id_user
      }
      portofolioModel
        .insertPortofolio(data)
        .then((result) => {
          success(res, result.rows, 'success', 'Insert portofolio Success')
        })
        .catch((err) => {
          failed(res, err.message, 'failed', 'Failed to insert portofolio')
        })
    } catch (err) {
      console.log(err)
    }
  },
  updatePortofolio: (req, res) => {
    const id_porto = req.params.id
    const image = req.file.filename
    const { name, linkrepo, type } = req.body
    const data = {
      id_porto,
      name,
      linkrepo,
      image,
      type
    }
    portofolioModel
      .updatePortofolio(data)
      .then((result) => {
        success(res, result.rowCount, 'success', 'Update portofolio Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to update portofolio')
      })
  }
}

module.exports = portofolioController
