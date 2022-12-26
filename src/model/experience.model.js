const db = require('../config/db')
const ecperienceModel = {
  // get all experience
  getAllExperience: () => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM experience join users on experience.id_user = users.id_user;',
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // get all experience berdasarkan user
  getAllExperienceByUser: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM experience join users on experience.id_user = users.id_user WHERE experience.id_user = ${id_user};`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // get detail experience
  getDetailExperience: (id_experience) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM experience join users on experience.id_user = users.id_user WHERE id_experience='${id_experience}';`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // delete experience
  deleteExperience: (id_experience) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM experience WHERE id_experience='${id_experience}'`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // insert experience
  insertExperience: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO experience ( posisi, companyexp, startyear, endyear, descriptionexp, id_user) VALUES ('${data.posisi}', '${data.companyexp}', '${data.startyear}', '${data.endyear}', '${data.descriptionexp}', ${data.id_user});`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  }

  // update experience
//   updateexperience: ({
//     id_porto,
//     name,
//     linkrepo,
//     imageporto,
//     type
//   }) => {
//     return new Promise((resolve, reject) => {
//       db.query(
//         `UPDATE experience SET 
//         name = COALESCE($1, name), 
//         linkrepo = COALESCE($2, linkrepo), 
//         imageporto = COALESCE($3, imageporto), 
//         type = COALESCE($4, type)
//         WHERE id_porto= $5`,
//         [name, linkrepo, imageporto, type, id_porto],
//         (err, result) => {
//           if (err) {
//             reject(err)
//           } else {
//             resolve(result)
//           }
//         }
//       )
//     })
//   }
}

module.exports = ecperienceModel
