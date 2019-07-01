require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.SERVER_PORT || 5000

const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
app.get('/', (req, res) => {
  res.send('Hello! this is my first endpoint!')
})

app.post('/book', (req, res) => {
  const data = {
    name: req.body.name,
    writer: req.body.writer,
    location: req.body.location,
    category: req.body.category,
    created_at: new Date(),
    updated_at: new Date()
  }
  conn.query('INSERT INTO book SET ?', data, (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, result: data })
  })
})

app.get('/book', (req, res) => {
  let search = req.query
  if (search.location && search.category) {
    conn.query('SELECT b.id, b.name, b.writer, l.name_location location, c.name_category category FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE l.name_location = ? AND c.name_category = ?', [search.location, search.category], (err, results) => {
      if (err)console.log(err)
      res.status(200).json({ error: null, status: 200, results })
    })
  } else if (search.location) {
    conn.query('SELECT b.id, b.name, b.writer, l.name_location AS location, c.name_category AS category FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE l.name_location = ?', search.location, (err, results) => {
      if (err)console.log(err)
      res.status(200).json({ error: null, status: 200, results })
    })
  } else if (search.category) {
    conn.query('SELECT b.id, b.name, b.writer, l.name_location AS location, c.name_category AS category FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE c.name_category = ?', search.category, (err, results) => {
      if (err)console.log(err)
      res.status(200).json({ error: null, status: 200, results })
    })
  } else {
    conn.query('SELECT b.id, b.name, b.writer, l.name_location AS location, c.name_category AS category FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category', (err, results) => {
      if (err) console.log(err)
      res.status(200).json({ error: null, status: 200, results })
    })
  }
})

app.get('/book/:book_id', (req, res) => {
  const bookid = req.params.book_id
  conn.query('SELECT b.id, b.name,l.name_location AS location, c.name_category AS category FROM book b INNER JOIN location l ON l.id = b.location INNER JOIN category c ON c.id = b.category WHERE b.id = ?', bookid, (err, results) => {
    if (err)console.log(err)
    res.json({ results })
  })
})

app.delete('/book/:book_id', (req, res) => {
  const bookid = req.params.book_id
  conn.query('DELETE FROM book WHERE id = ? ', bookid, (err, results) => {
    if (err)console.log(err)
    res.json({ results })
  })
})

app.patch('/book/:book_id', (req, res) => {
  const data = {
    name: req.body.name,
    writer: req.body.writer,
    location: req.body.location,
    category: req.body.category,
    updated_at: new Date()
  }
  const bookid = req.params.book_id
  conn.query('UPDATE book SET ? WHERE id = ?', [data, bookid], (err, results) => {
    if (err)console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.post('/category', (req, res) => {
  const data = {
    name_category: req.body.category,
    created_at: new Date(),
    updated_at: new Date()
  }
  conn.query('INSERT INTO category SET ?', data, (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.get('/category', (req, res) => {
  conn.query('SELECT * FROM category', (err, results) => {
    if (err)console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.patch('/category/:categoryid', (req, res) => {
  const data = {
    name_category: req.body.name
  }

  const categoryid = req.params.categoryid
  conn.query('UPDATE category SET ? WHERE id = ?', [data, categoryid], (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.delete('/category/:categoryid', (req, res) => {
  const categoryid = req.params.categoryid
  conn.query('DELETE FROM category WHERE id = ?', categoryid, (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.post('/location', (req, res) => {
  const data = {
    name_location: req.body.location,
    created_at: new Date(),
    updated_at: new Date()
  }
  conn.query('INSERT INTO location SET ?', data, (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.get('/location', (req, res) => {
  conn.query('SELECT * FROM location', (err, results) => {
    if (err)console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.patch('/location/:locationid', (req, res) => {
  const data = {
    name_location: req.body.name
  }

  const locationid = req.params.locationid
  conn.query('UPDATE location SET ? WHERE id = ?', [data, locationid], (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})

app.delete('/location/:locationid', (req, res) => {
  const locationid = req.params.locationid
  conn.query('DELETE FROM location WHERE id = ?', locationid, (err, results) => {
    if (err) console.log(err)
    res.status(200).json({ error: null, status: 200, results })
  })
})