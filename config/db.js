const { connect } = require('mongoose');

const connectDB = async () => {
  const db = await connect(process.env.MONGODB_URI);
  console.log(
    `MongoDB are connected on port ${db.connection.port}, host name ${db.connection.host}, database name ${db.connection.name}`
      .green.italic,
  );
};

module.exports = connectDB;
