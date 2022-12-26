const db = require('../config/db')
const skillModel = {
  // get all Skill
  getAllSkill: () => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM skilluser join users on skilluser.id_user = users.id_user;',
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // get all Skill berdasarkan user
  getAllSkillByUser: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM skilluser join users on skilluser.id_user = users.id_user WHERE skilluser.id_user =${id_user};`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // get detail Skill
  getDetailSkill: (id_skill) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM skilluser join users on skilluser.id_user = users.id_user WHERE id_skill='${id_skill}';`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // delete Skill
  deleteSkill: (id_skill) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM skilluser WHERE id_skill='${id_skill}'`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // insert Skill
  insertSkill: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO skilluser (skill, id_user) VALUES ('${data.skill}', ${data.id_user});`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },

  // update Skill
  updateSKill: ({
    id_porto,
    name,
    linkrepo,
    imageporto,
    type
  }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE skilluser SET 
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

module.exports = skillModel
