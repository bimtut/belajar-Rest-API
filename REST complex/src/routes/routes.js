const express = require('express')
const Route = express.Router()

const UserController = require('../controllers/controllers')

Route
  .get('/', UserController.getIndex)
  .get('/book', UserController.getAllBook)
  .get('/book/:userid', UserController.getBookId)
  .get('/book/name/:name', UserController.getBookName)
  .get('/category', UserController.getCategory)
  .get('/location', UserController.getLocation)
  .get('/category/:name', UserController.getBookCategory)
  .get('/location/:name', UserController.getBookLocation)
  .patch('/book/:userid',UserController.bookUpdate)
  .delete('/book/:userid',UserController.bookDelete)
  .post('/book',UserController.bookPost)
  // .patch('/:userid', UserController.updateUser)

module.exports = Route
