const db = require('../config/db')
const portofolioModel = {
  // get all portofolio
  getAllPortofolio: () => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM portofolio join users on portofolio.id_user = users.id_user;',
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // get all portofolio berdasarkan user
  getAllPortofolioByUser: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM portofolio join users on portofolio.id_user = users.id_user WHERE portofolio.id_user = ${id_user};`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // get detail portofolio
  getDetailPortofolio: (id_porto) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM portofolio join users on portofolio.id_user = users.id_user WHERE id_porto='${id_porto}';`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // delete portofolio
  deletePortofolio: (id_porto) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM portofolio WHERE id_porto='${id_porto}'`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // insert portofolio
  insertPortofolio: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO portofolio ( name, linkrepo, imageporto, type, id_user, imageporto_url, imageporto_public_id, imageporto_secure_url) VALUES ('${data.name}', '${data.linkrepo}', '${data.imageporto}', ${data.type}, ${data.id_user}, 
        '${data.imageporto_url}', '${data.imageporto_public_id}', '${data.imageporto_secure_url}');`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // update portofolio
  updatePortofolio: ({
    id_porto,
    name,
    linkrepo,
    imageporto,
    type
  }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE portofolio SET 
        name = COALESCE($1, name), 
        linkrepo = COALESCE($2, linkrepo), 
        imageporto = COALESCE($3, imageporto), 
        type = COALESCE($4, type)
        WHERE id_porto= $5`,
        [name, linkrepo, imageporto, type, id_porto],
        (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        }
      )
    })
  }
}

module.exports = portofolioModel
