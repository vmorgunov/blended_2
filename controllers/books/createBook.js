const Book = require('../../models/Books');

const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({
    success: true,
    message: 'Book created',
    data: {
      book,
    },
  });
};

module.exports = createBook;
