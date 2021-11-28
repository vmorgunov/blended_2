const express = require('express');

const router = express.Router();

const { booksController } = require('../controllers');

router.get('/', booksController.getBooks);

router.get('/:bookID', booksController.getSingleBook);

router.post('/', booksController.createBook);

router.patch('/:bookID', booksController.updateBook);

router.delete('/:bookID', booksController.removeBook);

// router.route('/').get((req, res) => {
//   res.send('get all books');
// });

// router.route('/').post((req, res) => {
//   res.send('add book');
// });

module.exports = router;
