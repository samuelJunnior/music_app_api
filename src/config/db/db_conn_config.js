const mongoose = require("mongoose");
require('dotenv').config();

const main = () => {
  const uri = process.env.DB_URL;
  mongoose.connect(uri)
          .then(() => console.log('Initialized database connection success!'))
          .catch((error) => console.log(`Database initialization error: ${error}`));
};

module.exports = main;
