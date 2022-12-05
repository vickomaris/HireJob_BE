
const db = require('../config/db')

const userModel = {
  // router list
  selectAll: (sort, asc, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users ORDER BY ${sort} ${asc} LIMIT ${limit} OFFSET ${offset} `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // lihat data by id
  selectDetail: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id_user=${id_user}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // lihat data by name
  selectDetailName: (username) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE lower(username) like lower('%${username}%')`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // update
  update: (id_user, username, email, phone, password, jobdesk, city, company, description, ig, github, gitlab, statusjob) => new Promise((resolve, reject) => {
    db.query(`UPDATE users SET username = COALESCE ($1, username), 
    email = COALESCE ($2, email), 
    phone = COALESCE ($3, phone), 
    password = COALESCE ($4, password), 
    jobdesk = COALESCE ($5, jobdesk), 
    city = COALESCE ($6, city), 
    company = COALESCE ($7, company), 
    description = COALESCE ($8, description), 
    ig = COALESCE ($9, ig), 
    github = COALESCE ($10, github), 
    gitlab = COALESCE ($11, gitlab),
    statusjob = COALESCE ($12, statusjob) 
    WHERE id_user = $13`,
      [username, email, phone, password, jobdesk, city, company, description, ig, github, gitlab, statusjob, id_user],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
  }),

  // router insert
  store: (username, email, phone, password) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO users (username, email, phone, password) VALUES ('${username}', '${email}', '${phone}', '${password}')`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
    })
  },
  // model register
  register: ({ username, email, phone, password, image }) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO users (username, email, phone, password, image) VALUES ('${username}', '${email}', '${phone}', '${password}', '${image}')`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
    })
  },

  // delete by id
  destroy: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id_user=${id_user}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },

  // model login
  checkUsername: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email='${email}'`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}

module.exports = userModel
