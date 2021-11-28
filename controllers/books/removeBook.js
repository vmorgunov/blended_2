const Book = require('../../models/Books');

const removeBook = async (req, res) => {
  const { bookID } = req.params;
  const book = await Book.findByIdAndDelete(bookID);

  if (!book) {
    return res.status(400).json({
      success: false,
      message: `Cant delete book with id: ${bookID}`,
      data: {
        book,
      },
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Remove book',
    data: {
      book,
    },
  });
};

module.exports = removeBook;
