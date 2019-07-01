const connection = require('../configs/db')
//guna file ini apa?
//NOTE: SUDAH DIMODIF. NAMUN APAKAH END POINT YANG LAIN JUGA PERLU DITAMBAHKAN? JIKA IYA APA SAJA YA?
module.exports = {//mencoba memodifikasi menjadi sesuai dengan tabel yang aku buat

  //mirip find all
  getAllBook: (callback) => {//tampilan updated dan created at bisa dimodif agar lebih informatif. misal hanya menampilkan tahun
    connection.query(`SELECT b.id, b.name, b.writer, l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category`, (err, result) => {
      callback(err, result)
    })
  },
  getLocation: (callback) => {
    connection.query(`SELECT * FROM location`, (err, result) => {
      if (err) console.log(err)

      callback(err, result)
    })
  },
  getCategory: (callback) => {
    connection.query(`SELECT * FROM category`, (err, result) => {
      if (err) console.log(err)

      callback(err, result)
    })
  },

  //mirip find by id
  getBookId: (userid) => {//masih kaku tidak pakai like dulu
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE b.id = ?`, userid, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBookName: (bookName) => {//masih kaku tidak pakai like dulu
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE b.name = ?`, bookName, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBookCategory: (bookCategory) => {//masih kaku tidak pakai like dulu
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE c.name_category = ?`, bookCategory, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBookLocation: (bookLocation) => {//masih kaku tidak pakai like dulu
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE l.name_location = ?`, bookLocation, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getBookComplete: (bookLocation, bookCategory) => {//masih kaku tidak pakai like dulu
    //AKU TEH MASIH RAGU SAMA CARA INI
    return new Promise((resolve, reject) => {
      connection.query(`SELECT b.id, b.name,l.name_location AS location, c.name_category AS category, b.updated_at, b.created_at FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE l.name_location = ? AND c.name_category = ?`, [bookLocation, bookCategory], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }, 
  bookDelete: (bookId) => {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM book WHERE id = ? `, bookId, (err, result) => {
        if (!err) {
          resolve(`Data dengan Id : ${bookId} berhasil di Hapus`)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  bookUpdate: (bookId, data) => {
    // const data = {
    //   name: req.body.name,
    //   writer: req.body.writer,
    //   location: req.body.location,
    //   category: req.body.category,
    //   updated_at: new Date()
    // }
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE book SET ? WHERE id = ?`, [data, bookId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  bookPost: (data) => {
    // const data = {
    //   name: req.body.name,
    //   writer: req.body.writer,
    //   location: req.body.location,
    //   category: req.body.category,
    //   created_at: new Date(),
    //   updated_at: new Date()
    // }
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO book SET ?`, data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
