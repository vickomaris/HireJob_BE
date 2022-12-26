const multer = require('multer')

const path = require('path')

// untuk management file
const multerUpload = multer({
  storage: multer.diskStorage({
    // destination: (req, file, cb) => {
    //   cb(null, './public')
    // },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      const filename = Date.now() + '' + ext
      cb(null, filename)
    }
  }),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    console.log(ext)
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      cb(null, true)
    } else {
      const error = {
        message: 'file must be jpg or png'
      }
      cb(error, false)
    }
  },
  limits: { fileSize: 2 * 1024 * 1024 }// 1mb
})

// untuk middleware
const upload = (req, res, next) => {
  const multerSingle = multerUpload.single('image')
  multerSingle(req, res, (err) => {
    if (err) {
      res.json({
        message: 'err',
        error: err
      })
    } else {
      next()
    }
  })
}
module.exports = upload
