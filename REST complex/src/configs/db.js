require('dotenv').config() // Initialize dotenv config
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: `${process.env.DB_PASSWORD}`,
  database: process.env.DB_NAME
})

connection.connect((err) => {//ini buat apa?
  //bisakah dimodif biar outputnya lebih baik?
  if (err) console.log(`Error: ${err}`)
})

module.exports = connection
