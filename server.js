const express = require('express');
const app = express();
const { colors } = require('./helpers');
const connectDB = require('./config/db');

const { booksRouter } = require('./routes');

require('dotenv').config({ path: './config/.env' });
app.use(express.json());

app.use('/api/v1/books', booksRouter);

connectDB();
const { PORT = 5050 } = process.env;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green);
});

process.on('unhandledRejection', (error, _) => {
  console.log(`error: ${error.message}`.red);
  server.close(() => {
    return process.exit(1);
  });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message: err.message });
});
