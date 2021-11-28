const Book = require('../../models/Books');

const getSingleBook = async (req, res) => {
  console.log(req.params.bookID);
  const { bookID } = req.params;

  const book = await Book.findById(bookID);
  // const book = await Book.findOne({ _id: bookID });

  res.status(200).json({
    success: true,
    message: 'Show book',
    data: {
      book,
    },
  });
};

module.exports = getSingleBook;
