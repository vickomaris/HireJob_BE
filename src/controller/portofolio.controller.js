const portofolioModel = require('../model/portofolio.model')
const { success, failed } = require('../helper/response')

const cloudinary = require('../helper/cloudinary')

const portofolioController = {
  list: (req, res) => {
    portofolioModel
      .getAllPortofolio()
      .then((result) => {
        success(res, result.rows, 'success', 'Get All experience List Success')
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'Failed to get all experience list')
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
  insert: async (req, res) => {
    try {
      const imageporto = await cloudinary.uploader.upload(req.file.path)

      const { name, linkrepo, type, id_user } = req.body
      // const imageporto = req.file.filename
      const data = {
        name,
        linkrepo,
        imageporto,
        type: parseInt(type),
        id_user: parseInt(id_user),
        imageporto_url: imageporto.url,
        imageporto_public_id: imageporto.public_id,
        imageporto_secure_url: imageporto.secure_url
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
    const imageporto = req.file.filename
    const { name, linkrepo, type } = req.body
    const data = {
      id_porto,
      name,
      linkrepo,
      imageporto,
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
