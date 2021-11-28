const Book = require('../../models/Books');

const updateBook = async (req, res) => {
  const { bookID } = req.params;

  const book = await Book.findByIdAndUpdate(bookID, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: 'Update book',
    data: {
      book,
    },
  });
};

module.exports = updateBook;
